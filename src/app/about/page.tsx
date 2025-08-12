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
        <div className="max-w-4xl mx-auto px-4 py-8 bg-warm-cream min-h-screen">
            {/* About Us Section */}
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-8 text-deep-brown">About Robin Perkins Boardgames</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-deep-brown/80 mb-6">
                        Welcome to Robin Perkins Boardgames, where we believe that the best memories are made around
                        a table with friends and family. Founded with a passion for bringing people together through
                        the joy of gaming, we carefully curate an exceptional selection of board games for every
                        type of player.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-deep-brown">Our Mission</h2>
                    <p className="text-deep-brown/80 mb-6">
                        We're dedicated to helping you discover your next favorite game. Whether you're a seasoned
                        strategist looking for your next challenge, a family seeking fun for game night, or someone
                        new to the world of modern board games, we're here to guide you to the perfect choice.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-deep-brown">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-sage-green/20">
                            <h3 className="font-semibold text-lg mb-2 text-amber-700">Expert Curation</h3>
                            <p className="text-deep-brown/70">Every game in our collection is hand-picked for quality, fun factor, and replay value.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-sage-green/20">
                            <h3 className="font-semibold text-lg mb-2 text-amber-700">Personal Service</h3>
                            <p className="text-deep-brown/70">Need a recommendation? We're passionate gamers ourselves and love helping you find the perfect game.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-sage-green/20">
                            <h3 className="font-semibold text-lg mb-2 text-amber-700">Quality Guarantee</h3>
                            <p className="text-deep-brown/70">We stand behind every product we sell with excellent customer service and support.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-sage-green/20">
                            <h3 className="font-semibold text-lg mb-2 text-amber-700">Fast Shipping</h3>
                            <p className="text-deep-brown/70">Get your games quickly and safely delivered right to your door.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-deep-brown">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-sage-green/20">
                        <h3 className="text-xl font-semibold mb-4 text-deep-brown">Get in Touch</h3>
                        <p className="text-deep-brown/80 mb-6">
                            Have questions about a game? Need a recommendation? Want to check on your order?
                            We'd love to hear from you!
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-deep-brown">Email</h4>
                                <p className="text-amber-700">hello@robinperkinsboardgames.com</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-deep-brown">Phone</h4>
                                <p className="text-deep-brown/80">(555) 123-GAME</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-deep-brown">Business Hours</h4>
                                <p className="text-deep-brown/80">
                                    Monday - Friday: 9 AM - 6 PM EST<br />
                                    Saturday: 10 AM - 4 PM EST<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-sage-green/20">
                        <h3 className="text-xl font-semibold mb-4 text-deep-brown">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-deep-brown">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-sage-green/30 rounded px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-deep-brown">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-sage-green/30 rounded px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-deep-brown">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-sage-green/30 rounded px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                                >
                                    <option value="" className="text-deep-brown">Select a subject</option>
                                    <option value="general" className="text-deep-brown">General Question</option>
                                    <option value="recommendation" className="text-deep-brown">Game Recommendation</option>
                                    <option value="order" className="text-deep-brown">Order Inquiry</option>
                                    <option value="return" className="text-deep-brown">Return/Exchange</option>
                                    <option value="other" className="text-deep-brown">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1 text-deep-brown">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full border border-sage-green/30 rounded px-3 py-2 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-amber-700 text-warm-cream px-6 py-2 rounded font-semibold hover:bg-amber-800 transition-colors"
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