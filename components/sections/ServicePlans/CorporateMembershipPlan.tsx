import React from 'react';
import { Card } from '../../ui/card';
import { Building2, Clock, Percent, BadgePercent, Timer } from 'lucide-react';

interface PriceRowProps {
  course: string;
  normalPrice: string;
  discountedPrice: string;
  pricePerSession?: string;
  discountedPricePerSession?: string;
}

const PriceRow = ({ course, normalPrice, discountedPrice, pricePerSession, discountedPricePerSession }: PriceRowProps) => (
  <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
    <td className="py-4 px-6 text-gray-600">{course}</td>
    <td className="py-4 px-6 text-right">
      <div className="text-blue-900 font-medium">{normalPrice}</div>
      {pricePerSession && (
        <div className="text-sm text-gray-500">({pricePerSession})</div>
      )}
    </td>
    <td className="py-3 px-4 text-right">
      <div className="text-emerald-600 font-medium">{discountedPrice}</div>
      {discountedPricePerSession && (
        <div className="text-sm text-emerald-500">({discountedPricePerSession})</div>
      )}
    </td>
  </tr>
);

export const CorporateMembershipPlan = () => {
  const prices60min: PriceRowProps[] = [
    {
      course: '4回',
      normalPrice: '￥38,000',
      discountedPrice: '￥34,200',
      pricePerSession: '¥9,500 / 1回あたり',
      discountedPricePerSession: '¥8,550 / 1回あたり',
    },
    {
      course: '8回',
      normalPrice: '￥72,000',
      discountedPrice: '￥64,800',
      pricePerSession: '¥9,000 / 1回あたり',
      discountedPricePerSession: '¥8,100 / 1回あたり',
    },
    {
      course: '12回',
      normalPrice: '￥102,000',
      discountedPrice: '￥91,800',
      pricePerSession: '¥8,500 / 1回あたり',
      discountedPricePerSession: '¥7,650 / 1回あたり',
    },
  ];

  const prices90min: PriceRowProps[] = [
    {
      course: '4回',
      normalPrice: '￥46,000',
      discountedPrice: '￥41,400',
      pricePerSession: '¥11,500 / 1回あたり',
      discountedPricePerSession: '¥10,350 / 1回あたり',
    },
    {
      course: '8回',
      normalPrice: '￥88,000',
      discountedPrice: '￥79,200',
      pricePerSession: '¥11,000 / 1回あたり',
      discountedPricePerSession: '¥9,900 / 1回あたり',
    },
    {
      course: '12回',
      normalPrice: '￥126,000',
      discountedPrice: '￥113,400',
      pricePerSession: '¥10,500 / 1回あたり',
      discountedPricePerSession: '¥9,450 / 1回あたり',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
        <Building2 className="h-6 w-6 text-blue-600" />
        法人会員（弊社店舗施設使用）
      </h3>
      <Card className="p-6 transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500">
        <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-0.5 rounded-lg mb-8">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BadgePercent className="h-5 w-5 text-blue-600" />
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                法人会員特典
              </p>
            </div>
            <div className="text-center space-y-2">
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                入会金無料
              </p>
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                通常コース料金から10%OFF!!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 p-6 rounded-lg mb-8 backdrop-blur-sm">
          <p className="text-gray-600">
            ご契約いただいた企業の従業員の皆様には、店舗ご来店特典として、入会金無料、下記通常コース料金の10%OFFでトレーニングをお受けいただけます。
          </p>
        </div>

        <div className="space-y-8">
          <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-6 text-blue-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                60分コース
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="border-b-2 border-gray-100 bg-gray-50">
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">チケット回数</th>
                      <th className="py-4 px-6 text-right font-semibold text-gray-700">通常コース料金</th>
                      <th className="py-4 px-6 text-right font-semibold text-emerald-600">
                        <div className="flex items-center justify-end gap-1">
                          <Percent className="h-4 w-4" />
                          10%OFF!!
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices60min.map((price, index) => (
                      <PriceRow key={index} {...price} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>

          <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500 backdrop-blur-sm bg-white/80">
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-6 text-blue-900 flex items-center gap-2">
                <Timer className="h-5 w-5 text-blue-600" />
                90分コース
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="border-b-2 border-gray-100 bg-gray-50">
                      <th className="py-4 px-6 text-left font-semibold text-gray-700">チケット回数</th>
                      <th className="py-4 px-6 text-right font-semibold text-gray-700">通常コース料金</th>
                      <th className="py-4 px-6 text-right font-semibold text-emerald-600">
                        <div className="flex items-center justify-end gap-1">
                          <Percent className="h-4 w-4" />
                          10%OFF!!
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices90min.map((price, index) => (
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
        </div>
      </Card>
    </div>
  );
};
