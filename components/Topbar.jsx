import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-cblack flex flex-col md:flex-row md:items-center md:justify-between justify-center items-center gap-3 md:gap-0 md:px-56 px-5 md:py-8 py-5 z-50">
      <Link href="/" className="w-full md:w-auto flex justify-center md:justify-start">
        <h1 className="uppercase md:text-4xl text-3xl font-semibold text-primary tracking-wide">
          Business
        </h1>
      </Link>
      <Link
        href="https://my-portfolio-2who.onrender.com/"
        className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-3 text-white transition-all duration-300 hover:text-primary group"
      >
        <span className="text-base md:text-lg font-medium tracking-wide">by Developer</span>
        <span className="text-xl md:text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
          Rohit Rathod
        </span>
        <MoveRight className="text-primary text-xl md:text-2xl group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
