"use client"

import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-black w-[100%]'>
      <h1 className="text-white font-bold text-6xl">Contact</h1>
      <Contact />
    </main>
  );
}