import Image from "next/image";

export default function Form() {
  return (
    <>
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
            <button className="bg-blue-500 text-white p-2 rounded w-full">Send</button>
          </div>
        </form>
      </div>
    </>
  )

}