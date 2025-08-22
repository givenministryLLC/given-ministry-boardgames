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
    },
    {
        id: 2,
        name: "Holiness or You",
        price: 34.99,
        category: "educational",
        handle: "holiness-or-you",
        players: "2-4 players",
        playtime: "60-90 minutes",
        age: "8+",
        rating: 4.9,
        reviews: 32,
        isNew: true,
        inStock: true,
        description: "A Christian-based board game that encourages building a personal relationship with God through biblical teachings.",
        longDescription: "Holiness or You is a faith-building board game designed to help players develop a deeper relationship with God. Based on biblical principles of salvation, justification, and sanctification, players journey through spiritual growth while learning about the armor of God. The game incorporates Bible cards, decision-making, and spiritual challenges that encourage reflection on Christian values and biblical knowledge.",
        features: [
            "Faith-based gameplay rooted in biblical teachings",
            "42 Bible cards with questions and spiritual guidance",
            "23 Flesh cards representing life's challenges",
            "Journey through salvation, justification, and sanctification",
            "Build spiritual armor and receive your crown at the end",
            "Encourages personal relationship with God",
            "Perfect for Christian families and church groups"
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