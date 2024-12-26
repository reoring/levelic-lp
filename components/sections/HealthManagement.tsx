import React from 'react';
import { Card } from '../ui/card';

export const HealthManagement = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">「健康経営」を戦略的に</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-blue-900 text-center">
                従業員の健康は企業の重要な資産
              </h3>
              <p className="mb-6 text-gray-600">
              従業員の健康維持・増進を会社が支援する事が義務となりつつあり、スポーツクラブと法人契約を結ぶなど従業員の健康増進への取り組みを行っている企業も多くなってきました。
            </p>
              <p className="mb-6 text-gray-600">
              福利厚生で社員の心と体の健康を保つ、目的に合わせた企業向け出張トレーニングのニーズが高まっています。
            </p>
              <p className="mb-6 text-gray-600">
              いつもの環境で勤務後や勤務時間の一部を使って、従業員様と一緒に楽しみながら運動することで、ストレス解消、心身のトラブルや不調、慢性疲労が改善されます。
            </p>
              <p className="text-gray-600 font-medium">
              フィットネスを通じて、従業員様一人ひとりのモチベーション・パフォーマンスの向上、ひいては企業の業績向上につながることが期待できます。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
