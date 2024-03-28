"use client";

import Social from "@/components/social/Social";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Contactpage = () => {
  const router=useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const { msg } = await response.json();
      if (msg === "Data submitted successfully!") {
        console.log(msg);
        router.push("/");
      } else {
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col flex-1 justify-center gap-5 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">Address</p>
          <p className="text-xl text-justify">2/2/1-A Karim Vila</p>
          <p className="text-xl text-justify">
            Tolarbagh water tank lane, Mirpur-1
          </p>
          <p className="text-xl text-justify">Dhaka, Bangladesh</p>
        </div>
        <p className="text-xl text-justify">Email: adreto.khan@gmail.com</p>
        <Social />
      </div>
      <div className="flex-1 animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* {placeholders.map((p) => (
            <input
              type="text"
              placeholder={p.holders}
              key={p.key}
              name={p.name}
              className="p-5 rounded-md border-none outline-none focus:outline-blue-900 focus:outline-2 focus:outline-offset-0 bg-blue-300 text-black hover:bg-blue-200 ease-in duration-300"
            />
          )
          )} */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="p-5 rounded-md border-none outline-none focus:outline-blue-900 focus:outline-2 focus:outline-offset-0 bg-blue-300 text-black hover:bg-blue-200 ease-in duration-300"
            onChange={handleNameChange}
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="p-5 rounded-md border-none outline-none focus:outline-blue-900 focus:outline-2 focus:outline-offset-0 bg-blue-300 text-black hover:bg-blue-200 ease-in duration-300"
            onChange={handleEmailChange}
            required
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone (Optional)"
            className="p-5 rounded-md border-none outline-none focus:outline-blue-900 focus:outline-2 focus:outline-offset-0 bg-blue-300 text-black hover:bg-blue-200 ease-in duration-300"
            onChange={handlePhoneChange}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
            className="p-5 rounded-md border-none outline-none focus:outline-blue-900 focus:outline-2 focus:outline-offset-0 bg-blue-300 text-black hover:bg-blue-200 ease-in duration-300"
            onChange={handleMessageChange}
            required
          ></textarea>
          <button
            type="submit"
            className="p-5 bg-blue-800 hover:bg-blue-700 ease-in duration-300 font-bold rounded-md cursor-pointer border-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
