import React, { useRef, useState } from 'react';
import axiosInstance from "../lib/axiosConfig"
import Icon from "@mdi/react";
import { mdiLoading, mdiClose } from "@mdi/js";

export default function Subscribe ({darkMode}) {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      // 3. Send a request to our API with the user's email address.
      await axiosInstance.post('/api/newsletter/subscribe', {
          email: inputEl.current.value
        },{
          headers: {
            'Content-Type': 'application/json'
          }
        });
    }catch(error){
        // 4. If there was an error, update the message in state.
        setMessage(error);
        return;
    }
  

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
    setLoading(false)
  };

  return (
    <section id="subscribe" className="text-gray-700 body-font flex md:flex-row flex-col items-center bg-primary dark:bg-inverse transition-all">
        <div className="lg:flex-grow md:w-1/2 lg:p-12 md:p-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary dark:text-inverse">Free Mindful Eating E-book</h2>
            <p className="mb-8 leading-relaxed text-primary dark:text-inverse">Get a free copy when you subscribe to my mailing list!</p>
            <div className="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200">
                <input 
                  className="border-l-4 border-primary bg-white focus:outline-none px-4 w-full m-0" 
                  placeholder="Email"
                  type="email"
                  id="email-input"
                  name="email"
                  ref={inputEl}
                  required
              
                />
                <button
                  className="flex justify-center items-center text-inverse py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-inverse"
                  type="submit"
                  onClick={subscribe}
                  >
                  {loading ? 
                    <Icon
                      className="animate-spin relative my-2"
                      path={mdiLoading}
                      size={1}
                      color={"white"}
                    /> 
                      : 'Subscribe'}
                </button>
            </div>
            <p className="my-4 flex flex-row justify-center items-center font-semibold text-primary">
              {`${message}`}
              <Icon
                onClick={() => setMessage('')}
                className="relative my-2 cursor-pointer"
                path={mdiClose}
                size={message ? 1 : 0}
                color={darkMode ? "white" : "black"}
              /> 
            </p>
        </div>
        <div className="md:w-1/2 w-full h-lg">
          {/* eslint-disable */}
            <img className="object-cover object-center w-full" alt="Mindful Eating Ebook Cover"
                src="/images/mindful-eating-cover.jpg"/>
        </div>
    </section>
  );
}
