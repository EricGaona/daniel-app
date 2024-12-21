import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="flex gap-6 items-center justify-center">
                <div className="flex-1 mx-auto p-4">
                    <h3>About us</h3>
                    <p className="text-center text-sm text-gray-500">
                        This is some dummy copy. You’re not really supposed to read this dummy copy,
                        it is just a place holder for people who need some type to visualize.
                    </p>
                </div>
                <div className="flex-1 mx-auto p-4">
                    <h3>Our Address</h3>
                    <p className="text-center text-sm text-gray-500">
                        146 W 29th St,<br />
                        New York,<br />
                        NY 10011
                    </p>
                    <a href="#" className="text-center text-sm text-gray-500">Contact us</a>
                </div>
                <div className="flex-1 mx-auto p-4">
                <h3>Our Address</h3>
                <p>Stay in touch with us</p>
                <ul className="flex gap-4">
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
                </div>

            </div>
            <div className="container mx-auto p-4">
                <p className="text-center text-sm text-gray-500">
                    &copy; 2022 Next.js
                </p>
            </div>
        </footer>
    )

}