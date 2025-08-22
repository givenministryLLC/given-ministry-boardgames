import { notFound } from 'next/navigation';
import {
    Star,
    Users,
    Clock,
    Tag,
    Shield,
    Heart,
    Share2,
    Plus,
    Minus,
    ShoppingCart,
    Award,
    CheckCircle
} from 'lucide-react';
import { games } from '@/data/games';

// Get game by handle from our data
async function getGame(handle: string) {
    return games.find(game => game.handle === handle) || null;
}

export default async function GameDetailPage({
    params,
}: {
    params: Promise<{ handle: string }>;
}) {
    const { handle } = await params;
    const game = await getGame(handle);

    if (!game) {
        notFound();
    }

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Enhanced Game Image */}
                    <div className="space-y-4">
                        <div className="relative bg-gradient-to-br from-sage-green/20 to-amber-100 h-96 rounded-xl mb-4 border border-sage-green/30 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current text-amber-600" />
                                <span className="font-medium text-deep-brown">{game.rating}</span>
                                <span className="text-deep-brown/60">({game.reviews})</span>
                            </div>
                            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                                <Heart className="w-5 h-5 text-deep-brown hover:text-red-500 transition-colors" />
                            </button>
                        </div>

                        {/* Thumbnail gallery placeholder */}
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-sage-green/20 h-20 rounded-lg border border-sage-green/30 hover:border-amber-700 transition-colors cursor-pointer"></div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Game Details */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                    {game.category}
                                </span>
                                <div className="flex items-center space-x-1 text-amber-700">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(game.rating) ? 'fill-current' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold mb-4 text-deep-brown">{game.name}</h1>
                            <p className="text-3xl font-bold text-gold mb-6">${game.price}</p>
                        </div>

                        {/* Game Stats */}
                        <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg border border-sage-green/20">
                            <div className="text-center">
                                <Users className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                                <div className="text-sm font-medium text-deep-brown">{game.players}</div>
                            </div>
                            <div className="text-center">
                                <Clock className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                                <div className="text-sm font-medium text-deep-brown">{game.playtime}</div>
                            </div>
                            <div className="text-center">
                                <Award className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                                <div className="text-sm font-medium text-deep-brown">Age {game.age}</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-deep-brown leading-relaxed">{game.description}</p>
                            <p className="text-deep-brown/80 leading-relaxed">{game.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-deep-brown flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-sage-green" />
                                <span>Game Features</span>
                            </h3>
                            <ul className="space-y-2">
                                {game.features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 text-deep-brown/80">
                                        <CheckCircle className="w-4 h-4 text-sage-green flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Purchase Section */}
                        <div className="bg-white p-6 rounded-lg border border-sage-green/20 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-deep-brown">Quantity:</span>
                                <div className="flex items-center border border-sage-green/30 rounded-lg">
                                    <button className="p-2 hover:bg-sage-green/10 transition-colors">
                                        <Minus className="w-4 h-4 text-deep-brown" />
                                    </button>
                                    <span className="px-4 py-2 text-deep-brown font-medium">1</span>
                                    <button className="p-2 hover:bg-sage-green/10 transition-colors">
                                        <Plus className="w-4 h-4 text-deep-brown" />
                                    </button>
                                </div>
                            </div>

                            {game.inStock ? (
                                <button className="w-full bg-amber-700 text-warm-cream px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Add to Cart - ${game.price}</span>
                                </button>
                            ) : (
                                <button disabled className="w-full bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed">
                                    Out of Stock
                                </button>
                            )}

                            <div className="flex items-center justify-between text-sm">
                                {game.inStock ? (
                                    <div className="flex items-center space-x-2 text-sage-green font-medium">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>In stock and ready to ship</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2 text-red-600">
                                        <span>❌ Currently out of stock</span>
                                    </div>
                                )}

                                <button className="flex items-center space-x-1 text-deep-brown/60 hover:text-amber-700 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2 text-deep-brown/70">
                                <Shield className="w-5 h-5 text-sage-green" />
                                <span className="text-sm">Secure checkout</span>
                            </div>
                            <div className="flex items-center space-x-2 text-deep-brown/70">
                                <CheckCircle className="w-5 h-5 text-sage-green" />
                                <span className="text-sm">30-day returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}