import React from 'react';
import { Card } from '../../ui/card';
import { Users, Clock, Target, CheckCircle2 } from 'lucide-react';

interface PriceTableProps {
  title: string;
  prices: {
    course: string;
    price: string;
    pricePerSession?: string;
  }[];
}

const PriceTable = ({ title, prices }: PriceTableProps) => (
  <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
    <div className="p-6">
      <h4 className="text-lg font-semibold mb-6 text-blue-900">{title}</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b-2 border-gray-100 bg-gray-50">
              <th className="py-4 px-6 text-left font-semibold text-gray-700">コース</th>
              <th className="py-4 px-6 text-right font-semibold text-gray-700">料金</th>
              {prices[0].pricePerSession && (
                <th className="py-4 px-6 text-right font-semibold text-gray-700">1回あたり</th>
              )}
            </tr>
          </thead>
          <tbody>
            {prices.map((price, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                <td className="py-4 px-6 text-gray-600">{price.course}</td>
                <td className="py-4 px-6 text-right text-blue-900 font-medium">{price.price}</td>
                {price.pricePerSession && (
                  <td className="py-4 px-6 text-right text-gray-600">{price.pricePerSession}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Card>
);

export const GroupLessonPlan = () => {
  const lessonTypes = [
    'ストレッチクラス',
    'ダイエットトレーニングクラス',
    '腰痛・肩凝り改善クラス',
    '有酸素運動クラス',
    '自重筋トレクラス',
    '姿勢改善プログラム',
    '生活習慣改善',
  ];

  const smallGroupPrices = [
    { course: '回数券コース 4回', price: '￥168,000', pricePerSession: '￥42,000' },
    { course: '回数券コース 8回', price: '￥312,000', pricePerSession: '￥39,000' },
    { course: '回数券コース 12回', price: '￥432,000', pricePerSession: '￥36,000' },
    { course: '都度利用コース 1回', price: '￥45,000', pricePerSession: '1回あたり' },
  ];

  const largeGroupPrices = [
    { course: '回数券コース 4回', price: '￥200,000', pricePerSession: '￥50,000' },
    { course: '回数券コース 8回', price: '￥360,000', pricePerSession: '￥45,000' },
    { course: '回数券コース 12回', price: '￥480,000', pricePerSession: '￥40,000' },
    { course: '都度利用コース 1回', price: '￥55,000', pricePerSession: '1回あたり' },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Users className="h-6 w-6 text-blue-600" />
        出張グループレッスン
      </h3>
      <div className="grid gap-8">
        <Card className="p-6 transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500">
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              60分
            </h4>
            <div className="space-y-4 text-gray-600 bg-blue-50/50 p-6 rounded-lg backdrop-blur-sm">
              <p>スタッフの運動不足解消の為、定期的にクラスを開催してほしい方</p>
              <p>会社の施設内でできるトレーニングクラスをしたい方</p>
              <p>会社のイベントで誰でも参加できる運動クラスを開催してほしい方</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              用途に合わせたレッスン内容
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-emerald-50/50 p-6 rounded-lg backdrop-blur-sm">
              {lessonTypes.map((type, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-500" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-600 italic">など様々なクラス内容で対応させて頂きます</p>
          </div>

          <div className="space-y-8">
            <PriceTable title="5〜19名様向け" prices={smallGroupPrices} />
            <PriceTable title="20〜35名様向け" prices={largeGroupPrices} />
          </div>

          <div className="mt-8 space-y-2 text-sm text-gray-500 bg-gray-50/80 p-6 rounded-lg backdrop-blur-sm">
            <p>※全て税込価格</p>
            <p>※出張費込みの料金となります</p>
            <p>※ヨガマットなどの備品は貴社にてご用意をお願い致します。</p>
            <p>※レッスン自体は60分ですが、前後の準備・片付けで合わせて約90分を目安に確保下さいますようお願い致します。</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
