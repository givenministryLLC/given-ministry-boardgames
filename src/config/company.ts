export const companyConfig = {
    name: "Given Ministry LLC",
    email: "robinperkins1125@gmail.com",
    phone: "937-823-1411",
    phoneFormatted: "937-823-1411",
    businessHours: {
        weekdays: "Monday - Friday: 9 AM - 6 PM EST",
        saturday: "Saturday: 10 AM - 4 PM EST",
        sunday: "Sunday: Closed"
    },
    description: "Your trusted source for amazing board games. Bringing families and friends together through the joy of gaming.",
    tagline: "A small family business bringing you carefully selected board games for unforgettable moments together",
    values: {
        familyOwned: "Family Owned & Operated",
        handPicked: "Hand Picked Games",
        established: "Est. 2024"
    },
    policies: {
        returnDays: 30,
        standardShipping: 9.99,
        processingTime: "1-2 business days",
        deliveryTime: "3-5 business days"
    },
    location: {
        country: "United States",
        description: "Proudly serving customers across the United States"
    }
} as const;