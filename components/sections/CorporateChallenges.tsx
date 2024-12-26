import React from 'react';
import { Card } from '../ui/card';
import { HelpCircle } from 'lucide-react';

export const CorporateChallenges = () => {
  const challenges = [
    '従業員の健康維持・増進に力を入れたい',
    '従業員の喜ぶ環境にしたい',
    '運動が苦手、初心者など、やり方が分からない従業員が多い',
    '仕事が忙しくて運動する時間が無い従業員が多い',
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">こんなお悩みはないですか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <Card key={index} className="transform hover:-translate-y-1 transition-all border-2 hover:border-purple-500 backdrop-blur-sm bg-white/80">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <HelpCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-gray-600">{challenge}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
