import React from "react";
import { Section, Container } from "../components/UI/Section";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24">
      <Section padding="lg">
        <Container size="lg">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Privacy Policy
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  DigitalLesson ("Company", "we", "our", or "us") operates the DigitalLesson website (the "Service").

                  This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

                  We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Information Collection And Use
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Personal Data: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data</li>
                  <li>Usage Data: Browser type and version, IP address, Pages visited, Time and date of visit, Duration spent on pages</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Use Of Data
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  DigitalLesson uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-4">
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer care and support</li>
                  <li>To gather analysis or valuable information</li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Security Of Data
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mt-4">
                  <li>By email: privacy@digitallesson.com</li>
                  <li>By visiting this page: <a href="/contact" className="text-blue-600">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
