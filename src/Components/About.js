import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to <strong>Test Nepal</strong> — your one-stop food delivery service that brings the best meals to your doorstep.
        </p>

        {/* Our Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <strong>Test Nepal</strong>, we strive to make food delivery convenient and fast. Whether you're craving your favorite comfort food or looking for something new, we ensure that every meal is delivered with care, right to your door. We are committed to bringing you an exceptional dining experience.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-blue-500">✔</span>
              <p className="text-lg text-gray-600">Wide selection of local restaurants and cuisines</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-blue-500">✔</span>
              <p className="text-lg text-gray-600">Fast and reliable delivery to your doorstep</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-blue-500">✔</span>
              <p className="text-lg text-gray-600">Real-time order tracking for your convenience</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-blue-500">✔</span>
              <p className="text-lg text-gray-600">Secure payment options for safe transactions</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">How It Works</h2>
          <ol className="list-decimal pl-6 text-lg text-gray-600 max-w-3xl mx-auto space-y-4">
            <li>Browse our wide variety of restaurants and dishes.</li>
            <li>Customize your order and choose your delivery time.</li>
            <li>Track your order in real-time until it arrives at your door.</li>
            <li>Enjoy your hot and freshly delivered meal!</li>
          </ol>
        </section>

        {/* Call to Action Section */}
        <section>
          <p className="text-lg text-gray-600 mb-6">Ready to satisfy your cravings?</p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Ordering Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
