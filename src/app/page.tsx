import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Truck,
  Users,
  Award,
  Sparkles,
  Heart
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-forest-prayer to-sanctuary-green text-warm-cream py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-mint-whisper/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-16 h-16 bg-warm-cream/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 right-1/3 w-12 h-12 bg-olive-mist/30 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
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
          <p className="text-xl mb-8 text-warm-cream/90 max-w-2xl mx-auto">
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
      </section>

      {/* About Our Family Business */}
      <section id="about" className="py-16 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-lg">
                <Heart className="w-8 h-8 text-warm-cream" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-deep-brown">Our Family Story</h2>
            <p className="text-deep-brown/70 max-w-3xl mx-auto text-lg">
              Welcome to our small family business! We believe that the best memories are made around
              a table with friends and family. Each game in our collection has been personally chosen
              because we know it brings joy and creates lasting connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Heart className="w-8 h-8 text-primary group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary text-center">Personal Touch</h3>
              <p className="text-gray-600 text-center">Every order is personally handled with care. We carefully select each game to ensure quality and meaningful play experiences.</p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Truck className="w-8 h-8 text-primary group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary text-center">Fast & Careful Shipping</h3>
              <p className="text-gray-600 text-center">We ship quickly and package with care to ensure your games arrive safely.</p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Users className="w-8 h-8 text-primary group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary text-center">Family Values</h3>
              <p className="text-gray-600 text-center">We choose games that educate about God and bring families together in faith and fellowship.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage-green/20 text-center">
              <div className="bg-mint-whisper w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <div className="text-xl font-bold text-deep-brown mb-1">Family</div>
              <div className="text-sm text-deep-brown/70">{companyConfig.values.familyOwned}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage-green/20 text-center">
              <div className="bg-mint-whisper w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <div className="text-xl font-bold text-deep-brown mb-1">Hand Picked</div>
              <div className="text-sm text-deep-brown/70">{companyConfig.values.handPicked}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-sage-green/20 text-center">
              <div className="bg-mint-whisper w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <div className="text-xl font-bold text-deep-brown mb-1">{companyConfig.values.established}</div>
              <div className="text-sm text-deep-brown/70">Serving Families</div>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}