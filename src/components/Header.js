"use client";
import Image from "next/image";
import "./Header.css";
import { useEffect } from "react";
import Link from "next/link";
export default function Header() {
    useEffect(() => {

        const about = document.getElementById("about");
        const aboutDropdown = about.querySelector("ul");

        const service = document.getElementById("service");
        const serviceDropdown = service.querySelector("ul");

        about.addEventListener("mouseenter", () => {
            aboutDropdown.classList.remove("hidden");
        }
        );
        about.addEventListener("mouseleave", () => {
            aboutDropdown.classList.add("hidden");
        }
        );

        service.addEventListener("mouseenter", () => {
            serviceDropdown.classList.remove("hidden");
        }
        );
        service.addEventListener("mouseleave", () => {
            serviceDropdown.classList.add("hidden");
        }
        );

    }, []);

    return (
        <header className="fixed w-full z-10 p-4 bg-black dark:bg-white text-white dark:text-black">
            <nav className="flex items-center gap-4 justify-between container mx-auto">
                <Link href="/" className="block bg-white dark:bg-black p-2 border-4 border-amber-500 dark:border-black">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={135}
                        height={28}
                        priority
                    />
                    </Link>
                <ul className="flex gap-4">
                    <li className="hover:text-amber-500 cursor-pointer py-5 font-bold"><Link href="/">Home</Link></li>
                    <li className="relative py-5 hover:text-amber-500 font-bold" id="about">About
                        {/* <ul className="absolute hidden bg-white dark:bg-black rounded shadow-lg w-32 left-1/2 -translate-x-1/2 top-14 divide-y divide-slate-200
                        before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:border-solid before:border-b-white before:border-b-8 before:border-x-transparent 
                        before:border-x-8 before:border-t-0"> */}
                        <div className="relative">
                            <ul className="absolute hidden bg-black shadow-lg w-32 left-1/2 -translate-x-1/2 top-5">
                                <li><Link href="/ourTeam" className="text-white hover:text-amber-500 px-4 py-2 block">Our Team</Link></li>
                                <li><a className="text-white hover:text-amber-500  cursor-pointer px-4 py-2 block" href="#">Our Board</a></li>
                                <li><a className="text-white hover:text-amber-500  cursor-pointer px-4 py-2 block" href="#">Offices</a></li>
                            </ul>
                            <div className="triangle"></div>
                        </div>
                    </li>
                    <li className="hover:text-amber-500 cursor-pointer py-5 font-bold"><Link href="/blog">Blog</Link></li>
                    <li className="relative py-5 hover:text-amber-500 font-bold" id="service">Services
                        <div className="relative">
                            <ul className="absolute hidden bg-black shadow-lg w-32 left-1/2 -translate-x-1/2 top-5">
                                <li><a className="text-white hover:text-amber-500 px-4 py-2 block" href="#">Services 1</a></li>
                                <li><a className="text-white hover:text-amber-500 px-4 py-2 block" href="#">Services 2</a></li>
                                <li><a className="text-white hover:text-amber-500 px-4 py-2 block" href="#">Services 3</a></li>
                                <li><Link href="/contact" className="text-white hover:text-amber-500 px-4 py-2 block">Contact</Link></li>
                            </ul>
                            <div className="triangle"></div>
                        </div>
                    </li>
                    <li className="hover:text-amber-500 cursor-pointer py-5 font-bold"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}