'use client';

import { useState } from 'react';

export default function AboutPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Message sent! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* About Us Section */}
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-8">About Robin Perkins Boardgames</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 mb-6">
                        Welcome to Robin Perkins Boardgames, where we believe that the best memories are made around
                        a table with friends and family. Founded with a passion for bringing people together through
                        the joy of gaming, we carefully curate an exceptional selection of board games for every
                        type of player.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        We're dedicated to helping you discover your next favorite game. Whether you're a seasoned
                        strategist looking for your next challenge, a family seeking fun for game night, or someone
                        new to the world of modern board games, we're here to guide you to the perfect choice.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Expert Curation</h3>
                            <p className="text-gray-600">Every game in our collection is hand-picked for quality, fun factor, and replay value.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Personal Service</h3>
                            <p className="text-gray-600">Need a recommendation? We're passionate gamers ourselves and love helping you find the perfect game.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
                            <p className="text-gray-600">We stand behind every product we sell with excellent customer service and support.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
                            <p className="text-gray-600">Get your games quickly and safely delivered right to your door.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section>
                <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-gray-700 mb-6">
                            Have questions about a game? Need a recommendation? Want to check on your order?
                            We'd love to hear from you!
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-blue-600">hello@robinperkinsboardgames.com</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-gray-700">(555) 123-GAME</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Business Hours</h4>
                                <p className="text-gray-700">
                                    Monday - Friday: 9 AM - 6 PM EST<br />
                                    Saturday: 10 AM - 4 PM EST<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Question</option>
                                    <option value="recommendation">Game Recommendation</option>
                                    <option value="order">Order Inquiry</option>
                                    <option value="return">Return/Exchange</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}