import { cookies } from 'next/headers';
import RootLayout from './RootLayout';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const lang = (await cookieStore).get('NEXT_LOCALE')?.value || 'en';
  console.log("Selected Language", lang);

  return <RootLayout lang={lang}>{children}</RootLayout>;
}