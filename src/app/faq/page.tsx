'use client';

import { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: "How long does shipping take?",
        answer: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while expedited shipping takes 1-2 business days. Free shipping is available on orders over $50."
    },
    {
        id: 2,
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase for unopened games in original condition. Opened games may be returned if defective or damaged during shipping. Return shipping costs are covered by us for defective items."
    },
    {
        id: 3,
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within the United States. We're working on expanding our shipping options to include international destinations in the future."
    },
    {
        id: 4,
        question: "Are your games authentic and new?",
        answer: "Yes, all our games are 100% authentic and brand new. We work directly with publishers and authorized distributors to ensure you receive genuine products in perfect condition."
    },
    {
        id: 5,
        question: "Can I cancel or modify my order?",
        answer: "You can cancel or modify your order within 1 hour of placing it by contacting us immediately. Once an order has been processed for shipping, we cannot make changes, but you can return items following our return policy."
    },
    {
        id: 6,
        question: "Do you offer game recommendations?",
        answer: "Absolutely! We love helping customers find their perfect game. Contact us with information about the number of players, preferred game length, complexity level, and any themes you enjoy, and we'll provide personalized recommendations."
    },
    {
        id: 7,
        question: "What if my game arrives damaged?",
        answer: "If your game arrives damaged or defective, please contact us within 7 days of delivery with photos of the damage. We'll immediately send a replacement at no cost to you."
    },
    {
        id: 8,
        question: "Do you have a loyalty program?",
        answer: "We're currently developing a loyalty program for our frequent customers. Sign up for our newsletter to be the first to know when it launches!"
    },
    {
        id: 9,
        question: "Can I pick up my order locally?",
        answer: "Local pickup is not currently available, but we're exploring this option for the future. All orders are fulfilled through our shipping partners."
    },
    {
        id: 10,
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website."
    }
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-warm-cream min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-deep-brown">Frequently Asked Questions</h1>

            <p className="text-deep-brown/80 mb-8">
                Can't find the answer you're looking for? <a href="/about" className="text-amber-700 hover:text-amber-800 underline">Contact us</a> and we'll be happy to help!
            </p>

            <div className="space-y-4">
                {faqs.map((faq) => (
                    <div key={faq.id} className="border border-sage-green/30 rounded-lg bg-white shadow-md">
                        <button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full text-left p-6 hover:bg-sage-green/5 focus:outline-none focus:bg-sage-green/5"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg text-deep-brown">{faq.question}</h3>
                                <span className="text-2xl text-amber-700">
                                    {openItems.includes(faq.id) ? '−' : '+'}
                                </span>
                            </div>
                        </button>

                        {openItems.includes(faq.id) && (
                            <div className="px-6 pb-6">
                                <p className="text-deep-brown/80">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-sage-green/20">
                <h2 className="text-xl font-semibold mb-2 text-deep-brown">Still have questions?</h2>
                <p className="text-deep-brown/80 mb-4">
                    Our customer service team is here to help! Reach out to us and we'll get back to you as soon as possible.
                </p>
                <a
                    href="/about"
                    className="bg-amber-700 text-warm-cream px-6 py-2 rounded font-semibold hover:bg-amber-800 transition-colors"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}