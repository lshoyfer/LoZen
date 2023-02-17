import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="
          flex justify-center items-center flex-col
          before:w-1/2 before:h-48 before:bg-slate-700 before:triangle-up before:mt-2 before:mx-auto before:mb-1
          after:w-1/2 after:h-48 after:bg-slate-700 after:triangle-down after:mt-1 after:mx-auto after:mb-2
        ">
        <div className="w-1/3 h-32 bg-purple-400 flex items-center justify-center">
          <Image
            src="/../public/crown-chakra.png"
            alt="Crown Chakra"
            width={100}
            height={100}
            className="bg-stone-900 rounded-full"
          />
        </div>
        <div className="w-1/2 h-32 bg-blue-400 flex items-center justify-center"> 
          <Image
            src="/../public/third-eye-chakra.png"
            alt="Third Eye Chakra"
            width={100}
            height={100}
            className="bg-slate-900 rounded-full"
          />
        </div>
        <div className="w-2/3 h-32 bg-cyan-400 flex items-center justify-center">
          <Image
            src="/../public/throat-chakra.png"
            alt="Throat Chakra"
            width={100}
            height={100}
            className="bg-indigo-900 rounded-full"
          />
        </div>
        <div className="w-5/6 h-32 bg-green-400 flex items-center justify-center"> 
          <Image
            src="/../public/heart-chakra.png"
            alt="Heart Chakra"
            width={100}
            height={100}
            className="bg-gray-900 rounded-full"
          />
        </div>
        <div className="w-2/3 h-32 bg-yellow-400 flex items-center justify-center"> 
          <Image
            src="/../public/solar-plexus-chakra.png"
            alt="Solar Plexus"
            width={100}
            height={100}
            className="bg-neutral-800 rounded-full"
          />
        </div>
        <div className="w-1/2 h-32 bg-orange-400 flex items-center justify-center">
          <Image
            src="/../public/sacral-chakra.png"
            alt="Sacral Chakra"
            width={100}
            height={100}
            className="bg-gray-800 rounded-full"
          />
        </div>
        <div className="w-1/3 h-32 bg-red-400 flex items-center justify-center">
          <Image
            src="/../public/root-chakra.png"
            alt="Root Chakra"
            width={100}
            height={100}
            className="bg-slate-900" 
          />
        </div>
      </div>
      <div className="w-full border-black border-t-4" />
      <div className="w-full flex items-center justify-evenly font-mono">
        <div className="
          text-5xl text-teal-900 italic font-semibold subpixel-antialiased
          tracking-widest underline decoration-double decoration-stone-900
          decoration-from-font
        ">
          Who are you?
        </div>
        <div className="p-6 shadow-2xl m-5 border-stone-900 border-4 rounded-lg flex justify-between">
          <Image
            src="/../public/jesus-svg.png"
            alt="Jesus Christ Simple Depiction"
            width={200}
            height={200}
            className="border-rose-900 border-[3px] px-1 mr-10 rounded-full"
          />
          <div className="flex flex-col justify-evenly text-center mr-2">
            <div className="text-4xl font-bold mt-4">Join us</div>
            <figcaption className="italic text-teal-900 mb-4">Be in God's spirtual movement.</figcaption>
            <button 
              className="
              text-rose-900 font-semibold px-6 py-2 rounded-xl border-2 border-rose-900 
              hover:bg-rose-900 hover:border-transparent hover:text-white
            ">
              Sign up.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
