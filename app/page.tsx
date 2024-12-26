import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, Calendar, Mail, MapPin, User, Dumbbell, Target, Users } from 'lucide-react'
import Image from "next/image"

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative flex h-full items-center justify-center">
          <div className="container mx-auto max-w-7xl px-4 text-center text-white">
            <div className="mb-8 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
              🎮 LEVEL UP YOUR LIFE
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-7xl">
              ゲームを超えて、<br className="md:hidden" />
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-emerald-400">現実で成長する</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
              ゲームのキャラクターではなく、あなた自身の成長を追求する。
              フィットネスを通じて、楽しみながら理想の自分へレベルアップ。
            </p>
            <Button className="mt-8 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600" size="lg">
              冒険を始める <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">ゲームから生まれた<br className="md:hidden" />新しい成長の形</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ゲームのキャラクターのステータス上げに没頭した経験から、
              現実世界での自己成長を追求するという新しい挑戦が始まりました。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-white shadow-lg transform hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">目標設定</h3>
              <p className="text-gray-600">ゲームのようにクリアな目標を設定し、達成への道筋を可視化します。</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg transform hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">楽しみながら成長</h3>
              <p className="text-gray-600">フィットネスを通じて、楽しみながら自己成長を実現します。</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg transform hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">コミュニティ</h3>
              <p className="text-gray-600">共に成長を目指す仲間との繋がりが、モチベーションを高めます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容セクション */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">事業内容</h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-blue-500">
              <CardContent className="p-6">
                <div className="status-bar mb-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">パーソナルトレーニング</h3>
                <p className="text-gray-600">
                  あなただけの成長プランを作成。ゲームのように段階的に成長を実感できるプログラムを提供します。
                </p>
              </CardContent>
            </Card>
            <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-emerald-500">
              <CardContent className="p-6">
                <div className="status-bar mb-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">オフィスジム導入支援</h3>
                <p className="text-gray-600">
                  オフィス内で気軽に始められる健康増進プログラム。従業員の健康スコアを楽しく向上させます。
                </p>
              </CardContent>
            </Card>
            <Card className="transform hover:-translate-y-1 transition-all border-2 hover:border-purple-500">
              <CardContent className="p-6">
                <div className="status-bar mb-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-purple-500 to-blue-500"></div>
                </div>
                <h3 className="mb-4 text-xl font-semibold">トレーナー育成</h3>
                <p className="text-gray-600">
                  モチベーションを引き出すスキルを持つ、次世代のトレーナーを育成します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">会社概要</h2>
          <div className="mx-auto max-w-4xl">
            <Card className="backdrop-blur-sm bg-white/80">
              <CardContent className="grid gap-6 p-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">会社名</h3>
                      <p>株式会社Levelic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">所在地</h3>
                      <p>101-0024 東京都千代田区神田和泉町1番地6-16ヤマトビル405</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <User className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">代表者</h3>
                      <p>代表取締役 髙橋樹里</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">設立</h3>
                      <p>2024年12月20日</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">あなたの冒険をサポートします</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            新しい成長の形に興味をお持ちの方は、お気軽にお問い合わせください。
          </p>
          <Button className="bg-white text-blue-900 hover:bg-gray-100" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            お問い合わせはこちら
          </Button>
        </div>
      </section>
    </main>
  )
}
