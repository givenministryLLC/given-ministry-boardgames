'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Filter,
    SortAsc,
    Grid3X3,
    List,
    Star,
    Users,
    Clock,
    Tag,
    Search,
    Sparkles,
    Award,
    BookOpen
} from 'lucide-react';
import { games, categories } from '@/data/games';

export default function GamesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchTerm, setSearchTerm] = useState('');

    // Update categories to include educational with icon
    const categoriesWithIcons = [
        { value: 'all', label: 'All Games', icon: Grid3X3 },
        { value: 'strategy', label: 'Strategy', icon: Filter },
        { value: 'family', label: 'Family', icon: Users },
        { value: 'party', label: 'Party', icon: Sparkles },
        { value: 'educational', label: 'Educational', icon: BookOpen }
    ];

    const filteredGames = games.filter(game => {
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
        const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sortedGames = [...filteredGames].sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-deep-brown flex items-center space-x-3">
                            <div className="bg-amber-700 p-2 rounded-lg">
                                <Grid3X3 className="w-8 h-8 text-warm-cream" />
                            </div>
                            <span>Board Games</span>
                        </h1>
                        <p className="text-deep-brown/70 mt-2">Discover your next favorite game from our curated collection</p>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 text-deep-brown/60">
                        <span>{sortedGames.length} games found</span>
                    </div>
                </div>

                {/* Enhanced Search and Filters */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep-brown/40" />
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white text-deep-brown"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categoriesWithIcons.map(category => {
                                const IconComponent = category.icon;
                                return (
                                    <button
                                        key={category.value}
                                        onClick={() => setSelectedCategory(category.value)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category.value
                                            ? 'bg-amber-700 text-warm-cream shadow-lg'
                                            : 'bg-sage-green/10 text-deep-brown hover:bg-sage-green/20'
                                            }`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span>{category.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sort and View Controls */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <SortAsc className="w-4 h-4 text-deep-brown/60" />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-sage-green/30 rounded-lg px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                                >
                                    <option value="name">Name</option>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>

                            <div className="flex border border-sage-green/30 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                        }`}
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Games Grid/List */}
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedGames.map((game) => (
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
                                        <div className="flex items-start justify-between">
                                            <h3 className="font-semibold text-deep-brown group-hover:text-amber-700 transition-colors">{game.name}</h3>
                                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full capitalize font-medium">
                                                {game.category}
                                            </span>
                                        </div>

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
                ) : (
                    // List View - similar structure but horizontal layout
                    <div className="space-y-4">
                        {sortedGames.map((game) => (
                            <Link key={game.id} href={`/games/${game.handle}`}>
                                <div className="group bg-white border border-sage-green/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <div className="flex items-center space-x-6">
                                        <div className="relative bg-gradient-to-br from-sage-green/20 to-amber-100 w-24 h-24 rounded-lg flex-shrink-0">
                                            {game.isNew && (
                                                <div className="absolute -top-1 -right-1 bg-amber-700 text-warm-cream p-1 rounded-full">
                                                    <Sparkles className="w-3 h-3" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-xl font-semibold text-deep-brown group-hover:text-amber-700 transition-colors">{game.name}</h3>
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full capitalize font-medium">
                                                        {game.category}
                                                    </span>
                                                    <p className="text-2xl font-bold text-gold">${game.price}</p>
                                                </div>
                                            </div>

                                            <p className="text-deep-brown/60 mb-3">{game.description}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-6 text-sm text-deep-brown/60">
                                                    <div className="flex items-center space-x-1">
                                                        <Users className="w-4 h-4" />
                                                        <span>{game.players}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{game.playtime}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-1 text-amber-700">
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <span className="font-medium">{game.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* No Results State */}
                {sortedGames.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-sage-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-12 h-12 text-sage-green" />
                        </div>
                        <h3 className="text-xl font-semibold text-deep-brown mb-2">No games found</h3>
                        <p className="text-deep-brown/60 mb-4">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                            }}
                            className="bg-amber-700 text-warm-cream px-6 py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}