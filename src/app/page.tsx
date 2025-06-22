'use client';

import FormWizard from '@/components/FormWizard';
import Header from '@/components/Header';
import '@/styles/page.css';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header/>
      <main className="pt-24 p-6">
        <h1 className="text-2xl font-bold mb-4">Main section</h1>
        <FormWizard/>
      </main>
    </div>
  );
}
