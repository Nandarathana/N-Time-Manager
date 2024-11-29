import React, { useState } from 'react';
import { Link2, Loader2 } from 'lucide-react';

export function DownloadForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-4">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste your video URL here..."
          className="w-full px-6 py-4 text-lg rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          required
        />
        <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-medium text-lg hover:opacity-90 transition-opacity disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center justify-center space-x-2">
            <Loader2 className="animate-spin" size={20} />
            <span>Processing...</span>
          </span>
        ) : (
          'Download Now'
        )}
      </button>
    </form>
  );
}