import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-yellow-800 text-warm-cream py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Robin Perkins Boardgames</h1>
          <p className="text-xl mb-8">Discover amazing board games for every occasion</p>
          <Link
            href="/games"
            className="bg-warm-cream text-deep-brown px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 max-w-7xl mx-auto px-4 bg-warm-cream">
        <h2 className="text-3xl font-bold text-center mb-12 text-deep-brown">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder featured games - will be replaced with Shopify data later */}
          {[1, 2, 3].map((game) => (
            <div key={game} className="border border-sage-green/30 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="bg-sage-green/20 h-48 rounded mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-deep-brown">Featured Game {game}</h3>
              <p className="text-gray-600 mb-4">Amazing strategy game for 2-4 players</p>
              <p className="text-2xl font-bold text-gold">$49.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-sage-green/20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-deep-brown">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-amber-700">Curated Selection</h3>
              <p className="text-gray-600">Hand-picked games for every type of player</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-amber-700">Fast Shipping</h3>
              <p className="text-gray-600">Get your games delivered quickly and safely</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-amber-700">Expert Support</h3>
              <p className="text-gray-600">Game recommendations and customer service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}