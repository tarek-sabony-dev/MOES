'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function ContactForm () {
  const form = useRef();
  const [status,  setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  
  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        // console.log(result.text);
        setStatus('success')
        form.current.reset()
    }, (error) => {
        // console.log(error.text)
        setStatus('error')
    })
  }

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 6000); // Return after 6 seconds
      return () => clearTimeout(timer);
    }
  }, [status])

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="w-full flex relative flex-col gap-6 p-2 ">
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
          <button className="w-full text-base font-semibold text-white hover:bg-white hover:text-black transition-colors text-center outline-none bg-transparent border rounded-lg p-3 " type="submit" >
            إرسال
          </button>
        </div>
        {(status === 'success' || status === 'error') && 
          <Notification status={status} />
        }
      </form>
    </>
  )
}

function Notification ({ status }) {
  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.5 
        }}
        className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-50">
        <Alert className={"w-fit h-fit bg-white "} >
          <AlertTitle>
            {status === 'success' ? 
              <div>
                تم إرسال الرسالة بنجاح
              </div>
              :
              <div>
                لم يتم إرسال الرسالة بنجاح
              </div>
            }
          </AlertTitle>
          <AlertDescription>
            {status === 'success' ? 
              <div>
                الرجاع مراجعة البريد من أجل استلام الرد
              </div>
              :
              <div>
                الرجاء إعادة المحاولة لاحقا
              </div>
            }
          </AlertDescription>
        </Alert>
      </motion.div>
    </>
  )
}