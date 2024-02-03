// import React from 'react';
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div
          className="bg-white w-72 h-96 rounded-xl flex flex-col items-center justify-between"
          id="contactCard"
        >
          <h1 className="w-full py-4 rounded-xl bg-cyan-800 text-center font-serif text-xl font-semibold border-4 border-white">
            Contact Us
          </h1>
          <ul className="text-black w-full text-center">
            <li className="my-8 font-semibold bg-purple-600 w-full py-4 text-white border-x-4 border-white">
              <Link className="font-sans">Github</Link>
            </li>
            <li className="my-8 font-semibold">
              <Link className="font-sans">Instgram</Link>
            </li>
            <li className="my-8 font-semibold bg-purple-600 w-full py-4 text-white border-x-4 border-white">
              <Link className="font-sans">LinkedIn</Link>
            </li>
          </ul>

          <p className="py-4 font-serif w-full rounded-xl bg-cyan-800 text-center border-4 border-white font-semibold">
            <span className="text-sm">E-mail :-</span>
            <hr />
            Harshitsikarwar232@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
