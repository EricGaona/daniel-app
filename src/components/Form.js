import { useState } from "react";
import { sendEmail } from "../api/email";
import Message from "./Message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Form() {

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .trim("Remove the space at the beginning or end")
      .strict(true),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async ({ name, email, message }) => {
    setIsLoading(true);
    const response = await sendEmail({ name, email, message });
    console.log("Response", response);

    if (response.data.success === "true") {
      setIsLoading(false);
      setName(name);
      setSuccess(true);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      setIsLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-gray-500">Fill out the form below and we will get back to you as soon as possible.</p>
      </div>
      <div>
        {!success && !error && !isLoading && (
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder=""
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red">{errors.name?.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red">{errors.email?.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded"
                {...register("message")}
              ></textarea>
              {errors.message && (
                <span className="text-red">{errors.message?.message}</span>
              )}
            </div>
            <div>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Send</button>
            </div>
          </form>
        )}
        {isLoading && (
          <div className="m-32 p-10">
            <button
              type="button"
              className="bg-white text-black font-bold p-5"

            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Processing...
            </button>
          </div>
        )}
        {success && (
          <Message
            title={"Thanks for your message"}
            message="We will get back to you as soon as possible!"
            person={name}
          />
        )}
        {error && (
          <Message
            title="Unable to send Email."
            message="Please try again later!"
          />
        )}
      </div>
    </>
  );

}