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
              <Link
                to="https://github.com/Harshit-here19"
                className="font-sans"
              >
                <ion-icon name="logo-github"></ion-icon> Github
              </Link>
            </li>
            <li className="my-8 font-semibold">
              <Link
                to="https://www.instagram.com/harshit.here.19/"
                className="font-sans"
              >
                <ion-icon name="logo-instagram"></ion-icon> Instgram
              </Link>
            </li>
            <li className="my-8 font-semibold bg-purple-600 w-full py-4 text-white border-x-4 border-white">
              <Link
                to="https://www.linkedin.com/in/harshit-sikarwar-b26285204/"
                className="font-sans"
              >
                <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
              </Link>
            </li>
          </ul>

          <p className="py-4 font-serif w-full rounded-xl bg-cyan-800 text-center border-4 border-white font-semibold">
            <span className="text-sm">
              <ion-icon name="mail-outline"></ion-icon> E-mail :-
            </span>
            <hr />
            Harshitsikarwar232@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
