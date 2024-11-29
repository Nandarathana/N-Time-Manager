import React from 'react';
import { Instagram, Facebook, Video, Image, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Instagram className="h-6 w-6 text-pink-500" />,
    title: 'Instagram',
    description: 'Download stories, reels, and posts',
  },
  {
    icon: <Facebook className="h-6 w-6 text-blue-500" />,
    title: 'Facebook',
    description: 'Save videos and photos from your feed',
  },
  {
    icon: <Video className="h-6 w-6 text-red-500" />,
    title: 'TikTok',
    description: 'Download your favorite TikTok videos',
  },
  {
    icon: <Image className="h-6 w-6 text-purple-500" />,
    title: 'High Quality',
    description: 'Get the best quality downloads',
  },
  {
    icon: <Shield className="h-6 w-6 text-green-500" />,
    title: 'Secure',
    description: 'Safe and private downloads',
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: 'Fast',
    description: 'Lightning-fast processing',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Download from Any Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                {feature.icon}
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}