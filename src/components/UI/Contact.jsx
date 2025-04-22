import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          setShowPopup(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center bg-indigo-100">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] p-2">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62705.60476007591!2d106.61816770142477!3d10.803629830552747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293818af3a73%3A0xcd8d16d1180acc8b!2sT%C3%A2n%20B%C3%ACnh%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1679992760048!5m2!1sen!2s"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center px-4 lg:px-8 py-8">
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>

              {showPopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center text-center">
                  <div className="bg-white rounded-[8px] shadow-lg p-4">
                    <h2 className="text-headingColor font-[700] text-[2.5rem] mb-4">
                      Success!
                    </h2>
                    <p className="text-[17px]">
                      Your email has been sent successfully!
                    </p>
                    <button
                      className="bg-smallTextColor text-white rounded-[8px] px-4 py-2 mt-4 items-center justify-center text-center"
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
