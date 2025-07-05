import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you 
            visit our website. They are widely used to make websites work more efficiently and provide 
            information to website owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Authentication and security</li>
            <li>Preferences and settings</li>
            <li>Analytics and performance</li>
            <li>Feature functionality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
              <p>Required for the website to function properly. Cannot be disabled.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
              <p>Remember your preferences and settings.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
              <p>Help us understand how visitors use our website.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
              <p>Used to deliver relevant advertisements and track their effectiveness.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>View cookies stored on your computer</li>
            <li>Delete individual cookies</li>
            <li>Block cookies from particular sites</li>
            <li>Block all cookies from being set</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookie Consent</h2>
          <p className="mb-4">
            When you first visit our website, we will ask for your consent to set cookies. You can 
            change your cookie preferences at any time through our cookie settings panel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page 
            with an updated revision date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: privacy@hackathonhub.com</p>
            <p>Address: 123 Innovation Street, San Francisco, CA 94107</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;