'use cleint'

import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
    });
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-6 p-2 ">
        <div className="w-full flex flex-col justify-center items-end gap-2 ">
          <label htmlFor="na  me" className="text-base font-semibold text-white ">
            الاسم
          </label>
          <input className="w-full text-base text-white text-right outline-none bg-transparent border rounded-lg p-3 " placeholder="الاسم" type="text" name="name" id="name" required />
        </div>
        <div className="w-full flex flex-col justify-center items-end gap-2 ">
          <label htmlFor="email" className="text-base font-semibold text-white ">
            البريد الإلكتروني
          </label>
          <input className="w-full text-base text-white outline-none bg-transparent border rounded-lg p-3 " placeholder="your_email@gmail.com" type="email" name="email" id="email" required />
        </div>
        <div className="w-full flex-1 flex flex-col justify-center items-end gap-2 ">
          <label htmlFor="question" className="text-base font-semibold text-white ">
            سؤالك
          </label>
          <textarea className="w-full flex-1 resize-none text-base text-white text-right outline-none bg-transparent border rounded-lg p-3 " placeholder=". . .اسألنا سؤالا" type="text" name="message" id="question" required />
        </div>
        <div className="w-full flex flex-col justify-center items-end gap-2 ">
          <button className="w-full text-base font-semibold text-white text-center outline-none bg-transparent border rounded-lg p-3 " type="submit" >
            إرسال
          </button>
        </div>
      </form>
    </>
  )
}