import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Users,
  Award,
  Sparkles,
  Heart
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary via-forest-prayer to-sanctuary-green text-warm-cream overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-mint-whisper/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-warm-cream/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/3 w-12 h-12 bg-olive-mist/30 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Hero Content */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-warm-cream/20 p-4 rounded-full">
                <Sparkles className="w-12 h-12 text-mint-whisper animate-spin" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in relative">
              <span className="relative inline-block text-warm-cream font-black tracking-tight transform hover:scale-105 transition-all duration-300"
                style={{
                  textShadow: `
                    2px 2px 0px #7a8471,
                    4px 4px 0px #6b7562,
                    6px 6px 0px #5c6653,
                    8px 8px 0px #4d5744,
                    10px 10px 0px #3e4835,
                    12px 12px 0px #2f3926,
                    14px 14px 20px rgba(0,0,0,0.4)
                  `
                }}>
                Welcome to {companyConfig.name}
              </span>
            </h1>
            <p className="text-lg mb-8 text-warm-cream/90 max-w-3xl mx-auto">
              {companyConfig.tagline}
            </p>
            <Link
              href="/games"
              className="inline-flex items-center space-x-2 bg-warm-cream text-forest-prayer px-8 py-4 rounded-xl font-semibold hover:bg-mint-whisper transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span>Shop Our Games</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Badges on sides with center content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start mt-16">
            {/* Left Badge */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="bg-warm-cream/10 backdrop-blur-sm p-6 rounded-xl border border-warm-cream/20 text-center hover:bg-warm-cream/20 transition-all duration-300">
                <div className="bg-mint-whisper/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-7 h-7 text-mint-whisper" />
                </div>
                <div className="text-lg font-bold text-warm-cream mb-1">Family</div>
                <div className="text-sm text-warm-cream/80">{companyConfig.values.familyOwned}</div>
              </div>
            </div>

            {/* Center Content - Three Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-warm-cream/10 backdrop-blur-sm p-6 rounded-xl border border-warm-cream/20 hover:bg-warm-cream/20 transition-all duration-300">
                <div className="bg-mint-whisper/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-mint-whisper" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-warm-cream text-center">Personal Touch</h3>
                <p className="text-warm-cream/80 text-sm text-center">Every order is personally handled with care. We carefully select each game to ensure quality and meaningful play experiences.</p>
              </div>

              <div className="group bg-warm-cream/10 backdrop-blur-sm p-6 rounded-xl border border-warm-cream/20 hover:bg-warm-cream/20 transition-all duration-300">
                <div className="bg-mint-whisper/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-7 h-7 text-mint-whisper" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-warm-cream text-center">Fast & Careful Shipping</h3>
                <p className="text-warm-cream/80 text-sm text-center">We ship quickly and package with care to ensure your games arrive safely.</p>
              </div>

              <div className="group bg-warm-cream/10 backdrop-blur-sm p-6 rounded-xl border border-warm-cream/20 hover:bg-warm-cream/20 transition-all duration-300">
                <div className="bg-mint-whisper/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-mint-whisper" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-warm-cream text-center">Family Values</h3>
                <p className="text-warm-cream/80 text-sm text-center">We choose games that educate about God and bring families together in faith and fellowship.</p>
              </div>
            </div>

            {/* Right Badge */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="bg-warm-cream/10 backdrop-blur-sm p-6 rounded-xl border border-warm-cream/20 text-center hover:bg-warm-cream/20 transition-all duration-300">
                <div className="bg-mint-whisper/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-mint-whisper" />
                </div>
                <div className="text-lg font-bold text-warm-cream mb-1">Hand Picked</div>
                <div className="text-sm text-warm-cream/80">{companyConfig.values.handPicked}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}