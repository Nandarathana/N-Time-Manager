import React from 'react';
import { Link, Download, Check } from 'lucide-react';

const steps = [
  {
    icon: <Link className="h-8 w-8 text-blue-600" />,
    title: 'Copy Link',
    description: 'Copy the URL of the content you want to download',
  },
  {
    icon: <Download className="h-8 w-8 text-purple-600" />,
    title: 'Paste URL',
    description: 'Paste the link into our downloader',
  },
  {
    icon: <Check className="h-8 w-8 text-green-600" />,
    title: 'Download',
    description: 'Click download and save your content',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}