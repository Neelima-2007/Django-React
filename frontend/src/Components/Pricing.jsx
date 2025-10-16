import React from "react";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹499",
      features: [
        "Access to basic features",
        "Email support",
        "Single user access",
        "Limited storage",
      ],
      button: "Get Started",
    },
    {
      name: "Pro",
      price: "₹999",
      features: [
        "Everything in Basic",
        "Priority email support",
        "Up to 5 users",
        "Increased storage",
      ],
      button: "Upgrade Now",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "₹1999",
      features: [
        "All Pro features",
        "Dedicated support",
        "Unlimited users",
        "Advanced analytics",
      ],
      button: "Contact Us",
    },
  ];

  return (
    <>
      {/* 🧭 Header Section */}
      <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
          </NavLink>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
            <NavLink
              to="/hero"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                  : "hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink to="/content" className="hover:text-gray-900">
              About
            </NavLink>
            <NavLink to="/gallery" className="hover:text-gray-900">
              Gallery
            </NavLink>
            <NavLink to="/pricing-plans" className="hover:text-gray-900">
              Pricing
            </NavLink>
            <NavLink to="/team" className="hover:text-gray-900">
              Team
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-900">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* 🖼️ Banner Section */}
<section className="bg-indigo-50 py-12">
  <div className="container mx-auto text-center">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      alt="Pricing Banner"
      className="rounded-lg shadow-lg mx-auto mb-6"
    />
    <h3 className="text-3xl font-bold text-gray-900 mb-2">
      Learn More, Pay Less 🎓
    </h3>
    <p className="text-gray-600">
      Flexible plans that help you achieve your learning goals efficiently.
    </p>
  </div>
</section>


      {/* 💡 Why Choose Our Plans */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Why Choose Our Plans?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our plans are designed for all types of learners — whether you’re just
          starting or upgrading your skills. Get lifetime access, mentorship,
          and certifications that boost your career.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-indigo-600 mb-2">
              💰 Affordable Pricing
            </h3>
            <p className="text-gray-600 text-sm">
              Get access to premium courses at student-friendly prices.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-indigo-600 mb-2">
              🎯 Skill-Based Learning
            </h3>
            <p className="text-gray-600 text-sm">
              Real-world projects and assignments to make you job-ready.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-64">
            <h3 className="font-bold text-indigo-600 mb-2">
              🤝 Expert Mentorship
            </h3>
            <p className="text-gray-600 text-sm">
              Learn directly from industry professionals and trainers.
            </p>
          </div>
        </div>
      </section>

      {/* 💸 Pricing Plans Section */}
      <section className="text-gray-600 body-font bg-gray-100 pt-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
              Pricing Plans
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Choose a plan that fits your needs. Simple, transparent pricing
              for everyone.
            </p>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-4 xl:w-1/4 md:w-1/2 w-full ${
                  plan.highlight ? "transform scale-105" : ""
                }`}
              >
                <div
                  className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${
                    plan.highlight
                      ? "border-indigo-500 bg-white shadow-lg"
                      : "border-gray-200"
                  }`}
                >
                  {plan.highlight && (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}

                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-500 uppercase">
                    {plan.name}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{plan.price}</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">
                      /mo
                    </span>
                  </h1>

                  {plan.features.map((feature, i) => (
                    <p
                      key={i}
                      className="flex items-center text-gray-600 mb-2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 mr-2 text-green-500"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      {feature}
                    </p>
                  ))}

                  <button
                    type="button"
                    className={`mt-auto text-white ${
                      plan.highlight
                        ? "bg-indigo-500 hover:bg-indigo-600"
                        : "bg-gray-400 hover:bg-gray-500"
                    } border-0 py-2 px-4 w-full focus:outline-none rounded`}
                    aria-label={`${plan.button} - ${plan.name}`}
                  >
                    {plan.button}
                  </button>

                  <p className="text-xs text-gray-500 mt-3">
                    Secure payment and instant activation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          What Our Students Say
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <p className="italic text-gray-700">
              “The Pro plan helped me complete my full stack course smoothly.
              Excellent support team and well-structured content!”
            </p>
            <h3 className="mt-4 font-bold text-gray-800">— Neelima D</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <p className="italic text-gray-700">
              “Very affordable plans and the mentor guidance is outstanding.
              I landed my first internship after completing their course.”
            </p>
            <h3 className="mt-4 font-bold text-gray-800">— Sravani D</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
