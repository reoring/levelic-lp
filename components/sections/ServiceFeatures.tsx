import React from 'react';
import { Card } from '../ui/card';
import { Check } from 'lucide-react';

export const ServiceFeatures = () => {
  const features = [
    'コンディショニングでカラダの根本から変えられるトレーニングメニューが得意',
    '運動初心者の方でも安心・安全なトレーニングを提供',
    '食事・睡眠・ストレス改善等の生活習慣改善のアドバイス',
    '10〜80代まで幅広い年齢の方へのセッション経験が豊富',
    'オンライン・出張・店舗と企業様のご要望によって対応可能',
    'マンツーマン・セミグループレッスン・グループレッスン対応可能',
    '有資格＆経験豊富なトレーナーが在籍（女性トレーナー、男性トレーナー共に在籍）'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Levelicが選ばれる理由</h2>
        
        <div className="mb-12 max-w-2xl mx-auto">
          <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">「ジムがひしめき合う時代」</h3>
              <p className="text-center mb-4 text-gray-600">多くの方がジム選びの迷子になっています！</p>
              <div className="text-center mb-4 text-gray-600">
                <p>何を基準に選んだらいいんだろう。。。</p>
                <p>どんなことをしてるんだろう。。。</p>
              </div>
              <p className="text-center font-semibold text-blue-600">
                丁寧にヒアリングさせて頂きます。<br />
                まずはお気軽にお問い合わせ下さい！
              </p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="transform hover:-translate-y-1 transition-all border-2 hover:border-emerald-500 backdrop-blur-sm bg-white/80">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </div>
                  <p className="text-gray-600">{feature}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
