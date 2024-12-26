import React from 'react';
import { Card } from '../../ui/card';
import { User, Clock, Target, Star } from 'lucide-react';

interface PriceRowProps {
  course: string;
  totalPrice: string;
  pricePerSession: string;
}

const PriceRow = ({ course, totalPrice, pricePerSession }: PriceRowProps) => (
  <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
    <td className="py-4 px-6 text-gray-600">{course}</td>
    <td className="py-4 px-6 text-right text-blue-900 font-medium">{totalPrice}</td>
    <td className="py-4 px-6 text-right text-gray-600">{pricePerSession}</td>
  </tr>
);

export const PersonalPlan = () => {
  const prices: PriceRowProps[] = [
    {
      course: '2回プラン（1ヶ月有効）',
      totalPrice: '￥29,000',
      pricePerSession: '￥14,500',
    },
    {
      course: '4回プラン（1ヶ月有効）',
      totalPrice: '￥54,000',
      pricePerSession: '￥13,500',
    },
    {
      course: '8回プラン（1ヶ月有効）',
      totalPrice: '￥100,000',
      pricePerSession: '￥12,500',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <User className="h-6 w-6 text-blue-600" />
        出張マンツーマントレーニング
      </h3>
      <Card className="p-6 transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500">
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            60分
          </h4>
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-0.5 rounded-lg mb-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                体験トレーニング　￥10,000
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-0.5 rounded-lg mb-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-blue-600" />
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  経営者の方にオススメ！
                </p>
              </div>
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                手間も省ける<br />効率的なトレーニング
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600 bg-blue-50/50 p-6 rounded-lg backdrop-blur-sm">
            <p>
              会社や御自宅で隙間時間にお伺いし、ジムに行く手間も省け、効率的にトレーニングやストレッチができます。
            </p>
            <p>
              定期的な運動により、効率的な仕事はもちろんのこと、メンタルヘルスや生活の質の改善も期待できます。
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-6 text-blue-900 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                料金プラン
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="border-b-2 border-gray-100 bg-gray-50">
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">コース</th>
                      <th className="py-4 px-6 text-right font-semibold text-gray-700">料金</th>
                      <th className="py-4 px-6 text-right font-semibold text-gray-700">1回あたり</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((price, index) => (
                      <PriceRow key={index} {...price} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 space-y-2 text-sm text-gray-500 bg-gray-50/80 p-6 rounded-lg backdrop-blur-sm">
          <p>※全て税込価格</p>
          <p>※出張費込みの料金となります</p>
          <p>※ヨガマットなどの備品は貴社にてご用意をお願い致します。</p>
          <p>※レッスン自体は60分ですが、前後の準備・片付けで合わせて約90分を目安に確保下さいますようお願い致します。</p>
        </div>
      </Card>
    </div>
  );
};
