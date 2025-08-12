import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Truck,
  Users,
  Award,
  Sparkles,
  Heart,
  Shield,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Enhanced Hero Section with Gradient and Animation */}
      <section className="relative bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-900 text-warm-cream py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-16 h-16 bg-warm-cream/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 right-1/3 w-12 h-12 bg-gold/30 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-warm-cream/20 p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-gold animate-spin" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to Robin Perkins Boardgames
          </h1>
          <p className="text-xl mb-8 text-warm-cream/90 max-w-2xl mx-auto">
            Discover amazing board games for every occasion and bring your family together
          </p>
          <Link
            href="/games"
            className="inline-flex items-center space-x-2 bg-warm-cream text-deep-brown px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Enhanced Featured Games */}
      <section className="py-16 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Star className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl font-bold text-deep-brown mb-4">Featured Games</h2>
            <p className="text-deep-brown/70 max-w-2xl mx-auto">
              Hand-picked favorites that bring families and friends together for unforgettable game nights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((game) => (
              <div key={game} className="group border border-sage-green/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2">
                <div className="bg-gradient-to-br from-sage-green/20 to-amber-100 h-48 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-amber-700 text-warm-cream px-2 py-1 rounded-full text-xs font-medium">
                    NEW
                  </div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-4 h-4 text-amber-700" />
                  <h3 className="text-xl font-semibold text-deep-brown">Featured Game {game}</h3>
                </div>
                <p className="text-gray-600 mb-4">Amazing strategy game for 2-4 players that brings excitement to every game night</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gold">$49.99</p>
                  <div className="flex items-center space-x-1 text-amber-700">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="bg-gradient-to-r from-sage-green/10 to-amber-100/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="w-8 h-8 text-amber-700" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-deep-brown">Why Choose Us?</h2>
          <p className="text-deep-brown/70 mb-12 max-w-2xl mx-auto">
            We're passionate about board games and committed to providing the best experience for every customer
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                <Award className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Curated Selection</h3>
              <p className="text-gray-600">Hand-picked games for every type of player, from strategy enthusiasts to family fun seekers</p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                <Truck className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Fast Shipping</h3>
              <p className="text-gray-600">Get your games delivered quickly and safely with free shipping on orders over $50</p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                <Users className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Expert Support</h3>
              <p className="text-gray-600">Game recommendations and friendly customer service from fellow board game enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Trust Indicators Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-sage-green group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-deep-brown">100%</div>
              <div className="text-sm text-deep-brown/70">Authentic Games</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-2">
                <Truck className="w-8 h-8 text-sage-green group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-deep-brown">Free</div>
              <div className="text-sm text-deep-brown/70">Shipping $50+</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-sage-green group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-deep-brown">4.9★</div>
              <div className="text-sm text-deep-brown/70">Customer Rating</div>
            </div>
            <div className="group">
              <div className="flex justify-center mb-2">
                <Zap className="w-8 h-8 text-sage-green group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-deep-brown">24h</div>
              <div className="text-sm text-deep-brown/70">Fast Processing</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}