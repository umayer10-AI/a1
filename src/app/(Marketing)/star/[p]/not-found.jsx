"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center from-slate-900 to-slate-800 text-white px-5">
      
      <div className="text-center space-y-6">
        
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-extrabold text-blue-400"
        >
          404
        </motion.h1>

        <p className="text-xl text-gray-300">
          Ayy hAyyyyyy
        </p>


        <Link href="/">
          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition-all duration-300 shadow-lg">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
}