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
        images: [
            "/images/games/freedoms_journey/freedoms_journey_gameboard.webp"
        ]
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
        images: [
            "/images/games/holiness_or_you/holiness_or_you_gameboard.webp",
        ]
    },
    {
        id: 3,
        name: "Hidden",
        price: 39.99,
        category: "strategy",
        handle: "hidden",
        players: "2-8 players",
        playtime: "45-75 minutes",
        age: "10+",
        rating: 4.7,
        reviews: 28,
        isNew: true,
        inStock: true,
        description: "A Christian mystery game based on Galatians 5:19 where players solve mysteries while learning about biblical teachings on hidden sins.",
        longDescription: "Hidden is a unique Christian-themed mystery game that combines the excitement of detective work with biblical teachings. Based on Galatians 5:19 and the principle that 'what is done in secret will come to light,' players navigate through different rooms including the Children's Church, Library, Baptismal Pool, and more while solving mysteries. The game teaches about the works of the flesh and encourages players to live in the light of God's truth.",
        features: [
            "Mystery-solving gameplay with biblical foundation",
            "Based on Galatians 5:19 and biblical principles",
            "Multiple room locations including church settings",
            "Character, weapon, and room cards for detective work",
            "Wildcard mechanics for strategic gameplay",
            "Accommodates large groups up to 8 players",
            "Teaches about living truthfully and avoiding hidden sins",
            "Perfect for youth groups and family game nights"
        ],
        images: [
            "/images/games/hidden/hidden_gameboard.webp",
            "/images/games/hidden/hidden_card.webp",
            "/images/games/hidden/weapon_cards_collage.webp",
            "/images/games/hidden/character_cards_collage.webp",
        ]
    }
];

export const categories = [
    { value: 'all', label: 'All Games' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'family', label: 'Family' },
    { value: 'party', label: 'Party' },
    { value: 'educational', label: 'Educational' }
];