"use client"

import { IoArrowBackCircleSharp } from "react-icons/io5";
import Contact from "@/components/contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-black w-[100%]'>
      <h1 className="text-white font-bold text-6xl">Contact</h1>
      <Contact />
      <Link href="/" className="flex flex-col items-center justify-center mt-10 text-2xl text-gray-400">
        <IoArrowBackCircleSharp size={40} href="/"/>
        Go Back
      </Link>
      
    </main>
  );
}