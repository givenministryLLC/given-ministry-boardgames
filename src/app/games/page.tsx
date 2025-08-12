'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GamesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    // Placeholder data - will be replaced with Shopify API
    const games = [
        { id: 1, name: 'Settlers of Catan', price: 49.99, category: 'strategy', handle: 'settlers-of-catan' },
        { id: 2, name: 'Ticket to Ride', price: 39.99, category: 'family', handle: 'ticket-to-ride' },
        { id: 3, name: 'Codenames', price: 19.99, category: 'party', handle: 'codenames' },
        { id: 4, name: 'Wingspan', price: 59.99, category: 'strategy', handle: 'wingspan' },
        { id: 5, name: 'Azul', price: 34.99, category: 'family', handle: 'azul' },
        { id: 6, name: 'Exploding Kittens', price: 19.99, category: 'party', handle: 'exploding-kittens' },
    ];

    const categories = ['all', 'strategy', 'family', 'party'];

    const filteredGames = games.filter(game =>
        selectedCategory === 'all' || game.category === selectedCategory
    );

    const sortedGames = [...filteredGames].sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 bg-warm-cream min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-deep-brown">Board Games</h1>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
                <div>
                    <label className="block text-sm font-medium mb-2 text-deep-brown">Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-sage-green/50 rounded px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat} className="text-deep-brown">
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2 text-deep-brown">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-sage-green/50 rounded px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                        <option value="name" className="text-deep-brown">Name</option>
                        <option value="price" className="text-deep-brown">Price</option>
                    </select>
                </div>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedGames.map((game) => (
                    <Link key={game.id} href={`/games/${game.handle}`}>
                        <div className="border border-sage-green/30 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer bg-white">
                            <div className="bg-sage-green/20 h-40 rounded mb-4"></div>
                            <h3 className="font-semibold mb-2 text-deep-brown">{game.name}</h3>
                            <p className="text-sm text-amber-700 mb-2 capitalize">{game.category}</p>
                            <p className="text-lg font-bold text-gold">${game.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}