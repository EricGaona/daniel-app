"use client";
import Image from "next/image"
import Map from "@/components/Map"
export default function blog() {
    return (
        <div className="mb-5">
            <div className="flex container mx-auto gap-6 justify-center items-center">
                <div className="flex-1">
                    <Image src="/img/img-contact.png" alt="Next.js logo" width={400} height={500} />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-bold mb-8">Blog page</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="container mx-auto py-12">
                <Map />
            </div>
        </div>
    )
}