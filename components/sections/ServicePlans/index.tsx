import React from 'react';
import { Card } from '../../ui/card';
import { GroupLessonPlan } from './GroupLessonPlan';
import { SemiGroupPlan } from './SemiGroupPlan';
import { PersonalPlan } from './PersonalPlan';
import { StretchPlan } from './StretchPlan';
import { CorporateMembershipPlan } from './CorporateMembershipPlan';

export const ServicePlans = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">サービス内容</h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center md:text-3xl">出張型トレーニングプラン</h3>
            <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-emerald-500 backdrop-blur-sm bg-white/80 max-w-4xl mx-auto mb-12">
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    貴社オフィスジムまたは近隣のレンタルジムにパーソナルトレーナーが出向き、トレーニングを実施します。
                  </p>
                  <p className="text-gray-600">
                    トレーナーの出張料金、お打合せの料金は別途かかりません。
                  </p>
                </div>
              </div>
            </Card>
            
            <div className="space-y-16">
              <SemiGroupPlan />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
