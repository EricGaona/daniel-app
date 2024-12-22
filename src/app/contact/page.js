import Image from "next/image"
export default function Contact() {
    return (
        <div className="my-5">
            <div className="flex container mx-auto gap-6 justify-center items-center">
                {/* <Image src="/public/img/img-contact.png" alt="Next.js logo" width={180} height={38} /> */}
                <Image src="/img-contact.png" alt="Next.js logo" width={100} height={8} className="flex-1" />
                <div className="flex-1">
                    <h3 className="text-4xl font-bold mb-8">Get in touch with us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <h1 className="container mx-auto bg-red-500 my-10">Hello, world! --- as a separator</h1>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                    <p className="text-gray-500">Fill out the form below and we will get back to you as soon as possible.</p>
                </div>
                <div>
                    <form className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder="" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded"></textarea>
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white p-2 rounded">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}