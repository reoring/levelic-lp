import React from 'react';
import { Card } from '../ui/card';
import { ArrowRight } from 'lucide-react';

interface BenefitProps {
  title: string;
  points: string[];
}

const Benefit = ({ title, points }: BenefitProps) => (
  <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-6 text-blue-900">{title}</h3>
      <div className="space-y-4">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </div>
            <p className="text-gray-600">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export const Benefits = () => {
  const benefits = [
    {
      title: '健康増進による業績アップ',
      points: [
        'ハイパフォーマンスで働くためには心身が健康であることが重要です。',
        '仕事が忙しく時間がない方も、効果的で再現性の高いトレーニングを受けることができます。',
      ],
    },
    {
      title: '従業員の生活習慣改善',
      points: [
        '運動機会の低下や食文化の多様化より、メタボ型のような未病の方は増加傾向にあります。',
        '定期的な運動やフィットネストレーニングは、従業員の健康を促進し、病気や生活習慣病のリスクを軽減します。',
      ],
    },
    {
      title: '人材採用への貢献',
      points: [
        '就職や転職活動をする際、以前のように給料ばかりが重要視されているわけではありません。',
        '従業員ひとりひとりが肉体的にも精神的にも満たされる働き方を実現できる企業であることは、大きな強みとなります。',
        'トレーニングを通じて従業員のエンゲージメントを高めることができ、離職率を低下させる効果も期待できます。',
      ],
    },
    {
      title: 'コミュニケーションの促進',
      points: [
        '良好な人間関係が築けている職場は、そうでない場合に比べて生産性が高いと言われています。',
        'グループで共に取り組むことにより従業員間のコミュニケーションも豊かになり、チームビルディングを強化します。',
        'ストレスは仕事の生産性に悪影響を与える可能性がありますが、トレーニングを通じてストレスを軽減し、従業員のメンタルヘルスをもサポートします。',
      ],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">ご利用頂くことで望める効果</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};
