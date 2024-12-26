import React from 'react';
import { Card } from '../../ui/card';
import { Users2, Clock, Target } from 'lucide-react';

interface PriceRowProps {
  members: string;
  totalPrice: string;
  pricePerPerson: string;
}

const PriceRow = ({ members, totalPrice, pricePerPerson }: PriceRowProps) => (
  <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
    <td className="py-4 px-6 text-gray-600">{members}</td>
    <td className="py-4 px-6 text-right text-blue-900 font-medium">{totalPrice}</td>
    <td className="py-4 px-6 text-right text-gray-600">{pricePerPerson}</td>
  </tr>
);

export const SemiGroupPlan = () => {
  const prices: PriceRowProps[] = [
    {
      members: '2名',
      totalPrice: '￥14,000',
      pricePerPerson: '￥7,000',
    },
    {
      members: '3名',
      totalPrice: '￥19,500',
      pricePerPerson: '￥6,500',
    },
    {
      members: '4名',
      totalPrice: '￥24,000',
      pricePerPerson: '￥6,000',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Users2 className="h-6 w-6 text-blue-600" />
        出張セミグループトレーニング
      </h3>
      <Card className="p-6 transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500">
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            70分
          </h4>
          <div className="space-y-4 text-gray-600 bg-blue-50/50 p-6 rounded-lg backdrop-blur-sm">
            <p>マンツーマントレーニングはハードルが高いと感じる方</p>
            <p>一人じゃ運動が続かなかった方にオススメ！</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-0.5 rounded-lg mb-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                お手頃価格で<br />始めやすい！
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p className="mb-4">
              20人〜30人のグループレッスンですと、お客様個別指導が難しくなる為、体力レベルや運動神経に合わせてレッスン内容を変えるのが難しくなります。
            </p>
            <p>
              セミグループレッスンですと個別でアドバイスが可能なので、グループレッスンよりしっかりトレーニングをしたい方にオススメです。
              マンツーマントレーニングより、お手頃価格なので始めやすいのも特徴です。
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
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">人数</th>
                      <th className="py-4 px-6 text-right font-semibold text-gray-700">料金</th>
                      <th className="py-4 px-6 text-right font-semibold text-gray-700">1人あたり</th>
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
          <p>※レッスン自体は70分ですが、前後の準備・片付けで合わせて約100分を目安に確保下さいますようお願い致します。</p>
        </div>
      </Card>
    </div>
  );
};
