import React from 'react';
import { Card } from '../../ui/card';
import { Activity, Clock, Users, Heart, UserPlus } from 'lucide-react';

interface PriceTableProps {
  title: string;
  description: string;
  prices: {
    duration: string;
    monthly: {
      once: string;
      twice: string;
      fourTimes: string;
    };
    hourlyRate: {
      once: string;
      twice: string;
      fourTimes: string;
    };
  };
}

const PriceTable = ({ title, description, prices }: PriceTableProps) => (
  <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
    <div className="p-6">
      <h4 className="text-lg font-semibold mb-4 text-blue-900 flex items-center gap-2">
        <Clock className="h-5 w-5 text-blue-600" />
        {title}
      </h4>
      {description && <p className="mb-4 text-gray-600">{description}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b-2 border-gray-100 bg-gray-50">
              <th className="py-4 px-6 text-left font-semibold text-gray-700">コース</th>
              <th className="py-4 px-6 text-right font-semibold text-gray-700">月1回コース</th>
              <th className="py-4 px-6 text-right font-semibold text-gray-700">月2回コース</th>
              <th className="py-4 px-6 text-right font-semibold text-gray-700">月4回コース</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
              <td className="py-4 px-6 text-gray-600">{prices.duration}滞在</td>
              <td className="py-4 px-6 text-right">
                <div className="text-blue-900 font-medium">{prices.monthly.once}</div>
                <div className="text-sm text-gray-500">（1回あたり）</div>
              </td>
              <td className="py-4 px-6 text-right">
                <div className="text-blue-900 font-medium">{prices.monthly.twice}</div>
                <div className="text-sm text-gray-500">（{prices.hourlyRate.twice}）</div>
              </td>
              <td className="py-4 px-6 text-right">
                <div className="text-blue-900 font-medium">{prices.monthly.fourTimes}</div>
                <div className="text-sm text-gray-500">（{prices.hourlyRate.fourTimes}）</div>
              </td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
              <td className="py-4 px-6 text-gray-600">滞在1時間あたり</td>
              <td className="py-4 px-6 text-right text-blue-900">{prices.hourlyRate.once}</td>
              <td className="py-4 px-6 text-right text-blue-900">{prices.hourlyRate.twice}</td>
              <td className="py-4 px-6 text-right text-blue-900">{prices.hourlyRate.fourTimes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Card>
);

export const StretchPlan = () => {
  const singleTrainerPrices = {
    duration: '120分',
    monthly: {
      once: '￥31,000',
      twice: '￥58,000',
      fourTimes: '￥108,000',
    },
    hourlyRate: {
      once: '￥15,500',
      twice: '￥14,500',
      fourTimes: '￥13,500',
    },
  };

  const singleTrainerPrices180 = {
    duration: '180分',
    monthly: {
      once: '￥45,000',
      twice: '￥84,000',
      fourTimes: '￥156,000',
    },
    hourlyRate: {
      once: '￥15,000',
      twice: '￥14,000',
      fourTimes: '￥13,000',
    },
  };

  const doubleTrainerPrices = {
    duration: '120分',
    monthly: {
      once: '￥60,000',
      twice: '￥112,000',
      fourTimes: '￥208,000',
    },
    hourlyRate: {
      once: '￥15,000×2名',
      twice: '￥14,000×2名',
      fourTimes: '￥13,000×2名',
    },
  };

  const doubleTrainerPrices180 = {
    duration: '180分',
    monthly: {
      once: '￥87,000',
      twice: '￥162,000',
      fourTimes: '￥300,000',
    },
    hourlyRate: {
      once: '￥14,500×2名',
      twice: '￥13,500×2名',
      fourTimes: '￥12,500×2名',
    },
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Activity className="h-6 w-6 text-blue-600" />
        出張ストレッチ
      </h3>
      <Card className="p-6 transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-0.5 rounded-lg mb-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-blue-600" />
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  ５時間以上のデスクワークをしている会社様にオススメ！
                </p>
              </div>
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                肩こり、腰痛、<br />うつ病リスクも軽減！
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600 bg-blue-50/50 p-6 rounded-lg backdrop-blur-sm">
            <p>
              ストレッチをすると、筋肉の緊張がゆるみ、血行を促してくれます。
              長時間同じ姿勢でいると筋肉は緊張していきますし、ハードな仕事や人間関係などのストレスによっても筋肉は緊張します。
            </p>
            <p>
              仕事の合間などにストレッチを行うことによって筋肉の緊張がほぐれ、リラックスし仕事の生産性も上がります。
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            トレーナー１名出張
          </h4>
          <div className="bg-emerald-50/50 p-6 rounded-lg mb-8 backdrop-blur-sm">
            <p className="mb-4">
              目安として、「２時間滞在/最大５名施術」「３時間滞在/最大８名施術」
            </p>
            <p>打ち合わせ時に詳細をご説明差し上げます。</p>
          </div>

          <PriceTable
            title="120分滞在"
            description=""
            prices={singleTrainerPrices}
          />
          <PriceTable
            title="180分滞在"
            description=""
            prices={singleTrainerPrices180}
          />
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-blue-600" />
            トレーナー２名出張
          </h4>
          <div className="bg-emerald-50/50 p-6 rounded-lg mb-8 backdrop-blur-sm">
            <p className="mb-4">
              目安として、「２時間滞在/最大１０名施術」「３時間滞在/最大１６名施術」
            </p>
            <p>打ち合わせ時に詳細をご説明差し上げます。</p>
          </div>

          <PriceTable
            title="120分滞在"
            description=""
            prices={doubleTrainerPrices}
          />
          <PriceTable
            title="180分滞在"
            description=""
            prices={doubleTrainerPrices180}
          />
        </div>

        <div className="space-y-2 text-sm text-gray-500 bg-gray-50/80 p-6 rounded-lg backdrop-blur-sm">
          <p>※全て税込価格</p>
          <p>※出張費込みの料金となります</p>
          <p>※ヨガマットなどの備品は貴社にてご用意をお願い致します。</p>
          <p>※レッスン自体は120分と180分ですが、前後の準備・片付けで合わせてプラス30分を目安に確保下さいますようお願い致します。</p>
        </div>
      </Card>
    </div>
  );
};
