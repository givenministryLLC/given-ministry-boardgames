export default function PoliciesPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Policies</h1>

            {/* Return Policy */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Return & Refund Policy</h2>
                <div className="prose prose-gray max-w-none">
                    <h3 className="text-lg font-semibold mb-2">30-Day Return Window</h3>
                    <p className="mb-4">
                        We want you to be completely satisfied with your purchase. If you're not happy with your order,
                        you may return it within 30 days of the delivery date for a full refund or exchange.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Return Conditions</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Games must be in original, unopened condition</li>
                        <li>All original packaging and components must be included</li>
                        <li>Items must be free from damage not caused by shipping</li>
                        <li>Custom or personalized items cannot be returned unless defective</li>
                    </ul>

                    <ol className="list-decimal pl-6 mb-4 space-y-1">
                        <li>Contact us at hello@robinperkinsboardgames.com with your order number</li>
                        <li>We'll provide return instructions and a return authorization number</li>
                        <li>Package the item securely in original packaging</li>
                        <li>Include the return authorization number in the package</li>
                        <li>Ship using the prepaid label we provide (for defective items) or your preferred method</li>
                    </ol>

                    <h3 className="text-lg font-semibold mb-2">Refund Processing</h3>
                    <p className="mb-6">
                        Refunds are processed within 3-5 business days after we receive your returned item.
                        You'll receive an email confirmation when the refund is issued. Please allow 5-10 business
                        days for the refund to appear on your original payment method.
                    </p>
                </div>
            </section>

            {/* Shipping Policy */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
                <div className="prose prose-gray max-w-none">
                    <h3 className="text-lg font-semibold mb-2">Shipping Options</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li><strong>Standard Shipping:</strong> 3-5 business days ($9.99)</li>
                        <li><strong>Expedited Shipping:</strong> 1-2 business days ($19.99)</li>
                        <li><strong>Free Standard Shipping:</strong> On orders over $50</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">Processing Time</h3>
                    <p className="mb-4">
                        Orders are typically processed within 1-2 business days. Orders placed after 2 PM EST
                        or on weekends will be processed the next business day. You'll receive a tracking number
                        via email once your order ships.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Shipping Locations</h3>
                    <p className="mb-4">
                        We currently ship only within the United States. We're working to expand our shipping
                        options to include international destinations in the future.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Delivery Issues</h3>
                    <p className="mb-6">
                        If your package is lost or damaged during shipping, please contact us immediately.
                        We'll work with the carrier to resolve the issue and ensure you receive your order.
                    </p>
                </div>
            </section>

            {/* Terms of Service */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
                <div className="prose prose-gray max-w-none">
                    <h3 className="text-lg font-semibold mb-2">Acceptance of Terms</h3>
                    <p className="mb-4">
                        By accessing and using this website, you accept and agree to be bound by the terms
                        and provision of this agreement. If you do not agree to abide by the above, please
                        do not use this service.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Use License</h3>
                    <p className="mb-4">
                        Permission is granted to temporarily download one copy of the materials on Robin Perkins
                        Boardgames' website for personal, non-commercial transitory viewing only. This is the
                        grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Modify or copy the materials</li>
                        <li>Use the materials for any commercial purpose or for any public display</li>
                        <li>Attempt to reverse engineer any software contained on the website</li>
                        <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">Product Information</h3>
                    <p className="mb-4">
                        We strive to provide accurate product information, including descriptions, prices,
                        and availability. However, we do not warrant that product descriptions or other content
                        is accurate, complete, reliable, current, or error-free.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Pricing</h3>
                    <p className="mb-4">
                        All prices are subject to change without notice. We reserve the right to modify
                        prices at any time. In the event of a pricing error, we reserve the right to
                        cancel any orders placed at the incorrect price.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Privacy</h3>
                    <p className="mb-6">
                        Your privacy is important to us. We collect and use your personal information only
                        to process orders and improve your shopping experience. We do not sell, trade, or
                        rent your personal information to third parties.
                    </p>
                </div>
            </section>

            {/* Privacy Policy */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                <div className="prose prose-gray max-w-none">
                    <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
                    <p className="mb-4">
                        We collect information you provide directly to us, such as when you create an account,
                        make a purchase, or contact us for support. This may include:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Name and contact information</li>
                        <li>Billing and shipping addresses</li>
                        <li>Payment information (processed securely through our payment processor)</li>
                        <li>Order history and preferences</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">How We Use Your Information</h3>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        <li>Process and fulfill your orders</li>
                        <li>Communicate with you about your orders</li>
                        <li>Provide customer support</li>
                        <li>Improve our website and services</li>
                        <li>Send you promotional emails (with your consent)</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">Information Security</h3>
                    <p className="mb-4">
                        We implement appropriate security measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction. All payment information
                        is processed through secure, PCI-compliant payment processors.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Cookies</h3>
                    <p className="mb-4">
                        Our website uses cookies to enhance your browsing experience and remember your preferences.
                        You can choose to disable cookies through your browser settings, though this may affect
                        some functionality of our website.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="mb-6">
                        If you have any questions about these policies or your personal information, please
                        contact us at hello@robinperkinsboardgames.com.
                    </p>
                </div>
            </section>

            {/* Last Updated */}
            <div className="text-sm text-gray-600 border-t pt-4">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
}