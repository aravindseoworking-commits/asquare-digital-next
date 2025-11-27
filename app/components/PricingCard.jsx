// app/components/PricingCard.jsx
import React from "react"

const pricingPlans = [
  {
    name: "Starter",
    price: "£99 / month",
    features: [
      "Local SEO Setup",
      "Google Business Profile Optimisation",
      "5 Target Keywords",
      "Basic Social Media Setup",
      "Monthly Performance Report",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "£299 / month",
    features: [
      "On-Page + Off-Page SEO",
      "20 Keyword Targets",
      "Google Ads Setup & Management",
      "Facebook & Instagram Lead Ads",
      "Lead Generation Funnel",
      "Weekly Reports",
    ],
    popular: true,
  },
  {
    name: "Performance Pro",
    price: "£499 / month",
    features: [
      "Full SEO Management",
      "Unlimited Keywords Strategy",
      "Google Ads + Meta Ads Management",
      "High-Converting Landing Pages",
      "Retargeting Campaigns & A/B Testing",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
]

export default function PricingCard() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your business goals.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition ${
                plan.popular ? "border-blue-600" : "border-gray-200"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
