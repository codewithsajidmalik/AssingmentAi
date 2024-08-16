import React, { useState } from "react";

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center">
        <button
          onClick={toggleDarkMode}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md"
          aria-label="Toggle Dark Mode"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        <section className="mt-10 p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pricing Plans</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">Choose a plan that fits your needs.</p>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Pricing Card */}
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden w-80">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Basic</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">$10 / month</p>
                <ul className="mt-4 space-y-2 text-left text-gray-600 dark:text-gray-300">
                  <li>5 Projects</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-600 p-6 text-center">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md">Get Started</button>
              </div>
            </div>
            
            {/* Additional pricing cards would go here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
