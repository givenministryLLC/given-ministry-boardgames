// src/app/page.tsx
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
  Zap,
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  Globe,
  Gamepad2
} from 'lucide-react';

export default function Home() {
  // Sample games data - will be replaced with Sanity CMS
  const games = [
    {
      id: 1,
      name: 'Settlers of Catan',
      price: 49.99,
      handle: 'settlers-of-catan',
      players: '3-4',
      playtime: '60-90 min',
      rating: 4.8,
      isNew: false,
      description: 'Build settlements and trade resources in this classic strategy game'
    },
    {
      id: 2,
      name: 'Ticket to Ride',
      price: 39.99,
      handle: 'ticket-to-ride',
      players: '2-5',
      playtime: '30-60 min',
      rating: 4.7,
      isNew: true,
      description: 'Cross-country train adventure connecting cities across America'
    },
    {
      id: 3,
      name: 'Wingspan',
      price: 59.99,
      handle: 'wingspan',
      players: '1-5',
      playtime: '40-70 min',
      rating: 4.9,
      isNew: true,
      description: 'Beautiful engine-building game about birds and their habitats'
    },
    {
      id: 4,
      name: 'Azul',
      price: 34.99,
      handle: 'azul',
      players: '2-4',
      playtime: '30-45 min',
      rating: 4.8,
      isNew: false,
      description: 'Tile-placement game creating beautiful mosaic patterns'
    }
  ];

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-900 text-warm-cream py-20 overflow-hidden">
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
            Welcome to Given Ministry LLC
          </h1>
          <p className="text-xl mb-8 text-warm-cream/90 max-w-2xl mx-auto">
            A small family business bringing you carefully selected board games for unforgettable moments together
          </p>
          <Link
            href="#our-games"
            className="inline-flex items-center space-x-2 bg-warm-cream text-deep-brown px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <span>Shop Our Games</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* About Our Family Business */}
      <section id="about" className="py-16 bg-warm-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-amber-700 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-warm-cream" />
                </div>
                <h2 className="text-3xl font-bold text-deep-brown">Our Family Story</h2>
              </div>
              <div className="prose prose-lg max-w-none text-deep-brown/80 space-y-4">
                <p>
                  Welcome to our small family business! We believe that the best memories are made around
                  a table with friends and family. Each game in our collection has been personally chosen
                  because we know it brings joy and creates lasting connections.
                </p>
                <p>
                  As a family-owned business, we take pride in providing personal service and recommendations.
                  We're not just selling games – we're helping you create wonderful memories with the people
                  you love most.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-md border border-sage-green/20">
                  <div className="text-center">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="text-2xl font-bold text-deep-brown">Family</div>
                    <div className="text-sm text-deep-brown/70">Owned & Operated</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-sage-green/20">
                  <div className="text-center">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="text-2xl font-bold text-deep-brown">Hand</div>
                    <div className="text-sm text-deep-brown/70">Picked Games</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-sage-green/20 to-amber-100 h-80 rounded-xl border border-sage-green/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-amber-600" />
                  <span className="font-medium text-deep-brown">Est. 2024</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-deep-brown">Family Business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Games Collection */}
      <section id="our-games" className="py-16 bg-gradient-to-r from-sage-green/10 to-amber-100/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Gamepad2 className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl font-bold text-deep-brown mb-4">Our Game Collection</h2>
            <p className="text-deep-brown/70 max-w-2xl mx-auto">
              Each game has been personally selected for its quality, fun factor, and ability to bring people together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Link key={game.id} href={`/games/${game.handle}`}>
                <div className="group bg-white border border-sage-green/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
                  {/* Game Image Placeholder */}
                  <div className="relative bg-gradient-to-br from-sage-green/20 to-amber-100 h-40 rounded-lg mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {game.isNew && (
                      <div className="absolute top-2 right-2 bg-amber-700 text-warm-cream px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>NEW</span>
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-deep-brown flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current text-amber-600" />
                      <span>{game.rating}</span>
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-deep-brown group-hover:text-amber-700 transition-colors">{game.name}</h3>
                    <p className="text-sm text-deep-brown/60 line-clamp-2">{game.description}</p>

                    <div className="flex items-center justify-between text-xs text-deep-brown/60">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{game.players}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{game.playtime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-sage-green/20">
                      <p className="text-xl font-bold text-gold">${game.price}</p>
                      <div className="flex items-center space-x-1 text-amber-700">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(game.rating) ? 'fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/games"
              className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-medium transition-colors group"
            >
              <span>View All Game Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-8 h-8 text-amber-700" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-deep-brown">Why Choose Our Family Business?</h2>
          <p className="text-deep-brown/70 mb-12 max-w-2xl mx-auto">
            We're not just another online store – we're a family that cares about bringing joy to your family
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-sage-green/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
              <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                <Heart className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Personal Touch</h3>
              <p className="text-gray-600">Every order is personally handled with care. We know each game and can provide personal recommendations.</p>
            </div>

            <div className="group bg-sage-green/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
              <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                <Truck className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Fast & Careful Shipping</h3>
              <p className="text-gray-600">We ship quickly and package with care to ensure your games arrive safely.</p>
            </div>

            <div className="group bg-sage-green/5 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
              <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                <Users className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-700">Family Values</h3>
              <p className="text-gray-600">We understand the importance of family time and choose games that bring people together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-warm-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-amber-700 p-3 rounded-full">
                <MessageCircle className="w-8 h-8 text-warm-cream" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-deep-brown mb-4">Get in Touch</h2>
            <p className="text-deep-brown/70 max-w-2xl mx-auto">
              Have questions about a game? Need a recommendation? We're a small family business and love to help personally!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-sage-green/20">
              <h3 className="text-xl font-semibold mb-6 text-deep-brown flex items-center space-x-2">
                <Globe className="w-6 h-6 text-amber-700" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-brown mb-1">Email</h4>
                    <p className="text-amber-700 hover:text-amber-800 transition-colors">
                      <a href="mailto:robinperkins1125@gmail.com">robinperkins1125@gmail.com</a>
                    </p>
                    <p className="text-sm text-deep-brown/60 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-brown mb-1">Phone</h4>
                    <p className="text-deep-brown/80">
                      <a href="tel:937-823-1411" className="hover:text-amber-700 transition-colors">937-823-1411</a>
                    </p>
                    <p className="text-sm text-deep-brown/60 mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-brown mb-1">Business Hours</h4>
                    <div className="text-deep-brown/80 space-y-1 text-sm">
                      <p>Monday - Friday: 9 AM - 6 PM EST</p>
                      <p>Saturday: 10 AM - 4 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-brown mb-1">Location</h4>
                    <p className="text-deep-brown/80 text-sm">
                      Proudly serving customers<br />
                      across the United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-sage-green/20">
              <h3 className="text-xl font-semibold mb-6 text-deep-brown flex items-center space-x-2">
                <Send className="w-6 h-6 text-amber-700" />
                <span>Quick Contact</span>
              </h3>

              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Need Game Recommendations?</h4>
                  <p className="text-amber-700 text-sm mb-4">
                    Tell us about your group size, preferred game length, and what kind of fun you're looking for.
                    We'll help you find the perfect game!
                  </p>
                  <a
                    href="mailto:robinperkins1125@gmail.com?subject=Game Recommendation Request"
                    className="inline-flex items-center space-x-2 bg-amber-700 text-warm-cream px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Ask for Recommendations</span>
                  </a>
                </div>

                <div className="bg-sage-green/10 p-6 rounded-xl border border-sage-green/20">
                  <h4 className="font-semibold text-deep-brown mb-3">Have Questions?</h4>
                  <p className="text-deep-brown/80 text-sm mb-4">
                    Questions about shipping, returns, or anything else? We're here to help and respond quickly!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:robinperkins1125@gmail.com"
                      className="inline-flex items-center justify-center space-x-2 bg-sage-green text-warm-cream px-4 py-2 rounded-lg text-sm font-medium hover:bg-sage-green/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href="tel:937-823-1411"
                      className="inline-flex items-center justify-center space-x-2 border border-sage-green text-sage-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-sage-green hover:text-warm-cream transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* Trust Indicators */}
      < section className="py-12 bg-white" >
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
              <div className="text-2xl font-bold text-deep-brown">Fast</div>
              <div className="text-sm text-deep-brown/70">Shipping</div>
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
                <Heart className="w-8 h-8 text-sage-green group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-deep-brown">Family</div>
              <div className="text-sm text-deep-brown/70">Owned Business</div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}