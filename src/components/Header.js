"use client";
import Image from "next/image";
import { useEffect } from "react";
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
        <header className="p-4 bg-orange-300 ">
            <nav className="flex items-center gap-4 justify-between container mx-auto">
                <a href="/" aria-label="Next.js" className="block">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </a>
                <ul className="flex gap-4">
                    <li className="py-5"><a href="#">Home</a></li>
                    <li className="relative py-5" id="about">About
                        <ul className="absolute hidden bg-white dark:bg-black rounded shadow-lg w-32 left-1/2 -translate-x-1/2 top-14 divide-y divide-slate-200
                        before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:border-solid before:border-b-white before:border-b-8 before:border-x-transparent 
                        before:border-x-8 before:border-t-0">
                            <li><a className="hover:text-red-500 cursor-pointer px-4 py-2 block" href="#">History</a></li>
                            <li><a className="hover:text-red-500 cursor-pointer px-4 py-2 block" href="#">Team</a></li>
                            <li><a className="hover:text-red-500 cursor-pointer px-4 py-2 block" href="#">Offices</a></li>
                        </ul>
                    </li>
                    <li className="relative py-5" id="service">Services
                        <ul className="absolute hidden bg-white dark:bg-black rounded shadow-lg w-32 left-1/2 -translate-x-1/2 top-14 divide-y divide-slate-200
                        before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-2 before:border-solid before:border-b-white before:border-b-8 before:border-x-transparent 
                        before:border-x-8 before:border-t-0">
                            <li><a className="hover:text-red-500 cursor-pointer px-4 py-2 block" href="#">History</a></li>
                            <li><a className="hover:text-red-500 cursor-pointer px-4 py-2 block" href="#">Team</a></li>
                            <li><a className="hover:text-red-500 cursor-pointer px-4 py-2 block" href="#">Offices</a></li>
                        </ul>
                    </li>
                    <li className="py-5"><a href="#">Contact</a></li>
                    <li className="py-5"><a href="#">Blog</a></li>

                </ul>
            </nav>
        </header>
    )
}