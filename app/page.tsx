import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FC<ImageProps> = ({ src, alt }) => (
    <Image
      src={src}
      alt={alt}
      layout="intrinsic" // Use "intrinsic" layout
      width={1200} // Set the width attribute
      height={1000} // Set the height attribute
      className="relative mt-20 ml-56 w-full h-full max-w-full max-h-full"
    />
  );
  
  const CircleOverlay: React.FC = () => (
    <div className="grow shrink-0 w-[400px] ml-40 h-full rounded-full mix-blend-color-burn bg-zinc-300 bg-opacity-20" />
  );
  
const MyComponent: React.FC = () => {
return (
    <div className="relative flex flex-col w-full h-screen rounded-lg bg-gradient-to-r from-blue-300 to-blue-900">
        <nav className="absolute top-0 w-full h-[70px] flex items-center justify-between px-10 bg-transparent text-white pt-10 z-10">
            <div className="flex items-center">
            <Link href="/" passHref>
                <Image src="/logo.svg" alt="Logo" width={150} height={150} className="ml-4 p-2" />
                </Link>
            </div>
            <ul className="flex font-bold text-1xl items-center space-x-6 mr-20">
                <li>
                    <Link href="/" className="hover:text-blue-400">
                            Home 
                    </Link>
                </li>
                <li>
                    <Link href="/courses" className="hover:text-blue-400">
                            Courses 
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-400">
                         About 
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-blue-400">
                         Contact 
                    </Link>
                </li>
            </ul>
        </nav>
        <section className="flex flex-col pt-8 w-full h-full">
            <div className="relative flex justify-center items-center aspect-square md:ml-20 mt-20 w-[300px] md:w-[400px]">
                <CustomImage src="/hero1.png" alt="Sample Image" />
                <section className="absolute flex justify-center items-center w-full h-full">
                    <CircleOverlay />
                </section>
            </div>
            <section className="absolute right-0 top-1/4 mr-80">
                <div className="text-left">
                    <h1 className="mb-4 font-bold text-6xl text-black">
                        <span className="text-purple-800">E</span> - Learning <br />Anywhere  <br />In the world
                    </h1>
                    <p className="mb-4 font-bold  text-2xl text-[#0d0010]">The best place to learn programming</p>
                    <Link href="/search" passHref>
                        <Button className="px-4 py-2 text-white bg-black rounded-full hover:opacity-75">
                        Explore Courses
                        </Button>
                    </Link>
                    <Link href="/dashboard" passHref>
                        <Button className="px-4 py-2 text-white bg-black rounded-full ml-4 hover:opacity-75">
                        Get Started
                        </Button>
                    </Link>
                </div>
            </section>
        </section>
    </div>
);
};

export default MyComponent;
