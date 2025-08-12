import { notFound } from 'next/navigation';

// This will be replaced with Shopify API call
async function getGame(handle: string) {
    // Placeholder data
    const games = {
        'settlers-of-catan': {
            id: 1,
            name: 'Settlers of Catan',
            price: 49.99,
            description: 'Build settlements, cities, and roads to earn victory points and become the dominant force on the island of Catan.',
            players: '3-4 players',
            playtime: '60-90 minutes',
            age: '10+',
            category: 'Strategy',
            inStock: true,
            images: []
        },
        'ticket-to-ride': {
            id: 2,
            name: 'Ticket to Ride',
            price: 39.99,
            description: 'A cross-country train adventure where players collect train cards to claim railway routes connecting cities.',
            players: '2-5 players',
            playtime: '30-60 minutes',
            age: '8+',
            category: 'Family',
            inStock: true,
            images: []
        },
        'codenames': {
            id: 3,
            name: 'Codenames',
            price: 19.99,
            description: 'A clever team-based word game where spymasters give one-word clues to help their teammates identify their agents.',
            players: '2-8 players',
            playtime: '15 minutes',
            age: '14+',
            category: 'Party',
            inStock: true,
            images: []
        },
        'wingspan': {
            id: 4,
            name: 'Wingspan',
            price: 59.99,
            description: 'A competitive, medium-weight, card-driven, engine-building board game about birds.',
            players: '1-5 players',
            playtime: '40-70 minutes',
            age: '10+',
            category: 'Strategy',
            inStock: true,
            images: []
        },
        'azul': {
            id: 5,
            name: 'Azul',
            price: 34.99,
            description: 'A tile-placement game where players compete to create the most beautiful wall.',
            players: '2-4 players',
            playtime: '30-45 minutes',
            age: '8+',
            category: 'Family',
            inStock: true,
            images: []
        },
        'exploding-kittens': {
            id: 6,
            name: 'Exploding Kittens',
            price: 19.99,
            description: 'A card game for people who are into kittens and explosions and laser beams and sometimes goats.',
            players: '2-5 players',
            playtime: '15 minutes',
            age: '7+',
            category: 'Party',
            inStock: true,
            images: []
        }
    };

    return games[handle as keyof typeof games] || null;
}

export default async function GameDetailPage({
    params,
}: {
    params: Promise<{ handle: string }>;
}) {
    // Await the params object
    const { handle } = await params;
    const game = await getGame(handle);

    if (!game) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Game Image */}
                <div>
                    <div className="bg-gray-200 h-96 rounded-lg mb-4"></div>
                </div>

                {/* Game Details */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
                    <p className="text-2xl font-bold text-blue-600 mb-6">${game.price}</p>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Game Details:</h3>
                        <ul className="text-gray-600 space-y-1">
                            <li><strong>Players:</strong> {game.players}</li>
                            <li><strong>Play time:</strong> {game.playtime}</li>
                            <li><strong>Age:</strong> {game.age}</li>
                            <li><strong>Category:</strong> {game.category}</li>
                        </ul>
                    </div>

                    <p className="text-gray-700 mb-8">{game.description}</p>

                    {/* Buy Button */}
                    <div className="mb-6">
                        {game.inStock ? (
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto">
                                Add to Cart - ${game.price}
                            </button>
                        ) : (
                            <button disabled className="bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold w-full md:w-auto">
                                Out of Stock
                            </button>
                        )}
                    </div>

                    <div className="text-sm text-gray-600">
                        {game.inStock ? (
                            <p>✅ In stock and ready to ship</p>
                        ) : (
                            <p>❌ Currently out of stock</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}