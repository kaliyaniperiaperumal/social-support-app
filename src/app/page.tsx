'use client';

import Header from '@/components/Header';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header/>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Main section</h1>
        <p className="text-gray-600">Forms</p>
      </main>
    </div>
  );
}
