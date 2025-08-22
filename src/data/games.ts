export interface Game {
    id: number;
    name: string;
    price: number;
    category: string;
    handle: string;
    players: string;
    playtime: string;
    age: string;
    rating: number;
    reviews: number;
    isNew: boolean;
    inStock: boolean;
    description: string;
    longDescription: string;
    features: string[];
    images: string[];
}

export const games: Game[] = [
    {
        id: 1,
        name: "Freedom's Journey",
        price: 29.99,
        category: "educational",
        handle: "freedoms-journey",
        players: "2-6 players",
        playtime: "45-60 minutes",
        age: "8+",
        rating: 4.8,
        reviews: 47,
        isNew: true,
        inStock: true,
        description: "An educational board game that teaches about the Underground Railroad and the journey to freedom.",
        longDescription: "Freedom's Journey is a powerful educational board game that takes players through the harrowing experience of escaping slavery via the Underground Railroad. Players start at a plantation and must make critical decisions, answer historical questions, and navigate challenges to reach freedom. This game combines learning with engaging gameplay to teach important American history.",
        features: [
            "Educational gameplay about the Underground Railroad",
            "Historical information cards with real facts",
            "Hope cards that provide encouragement and historical context",
            "Suitable for family learning and classroom use",
            "Teaches important lessons about courage and perseverance"
        ],
        images: []
    }
];

export const categories = [
    { value: 'all', label: 'All Games' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'family', label: 'Family' },
    { value: 'party', label: 'Party' },
    { value: 'educational', label: 'Educational' }
];