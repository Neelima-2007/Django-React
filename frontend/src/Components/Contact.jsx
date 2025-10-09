import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative bg-gray-100">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="Srivensy Technologies Tirupati Map"
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.305301934822!2d79.41291317414752!3d13.35418890685708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1acb0ff48b%3A0xc7e4f416ce38df69!2sSrivensy%20Technologies!5e0!3m2!1sen!2sin!4v1728217472211!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                #23-2-212, TTD Plots, Near Vaikuntapuram Arch, MR Palli, Tirupati - 517501
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:info@srivensy.in" className="text-indigo-500 leading-relaxed">
                info@srivensy.in
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91 76010 39749</p>
              <p className="leading-relaxed">+91 76010 73187</p>
            </div>
          </div>
        </div>

      
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-md p-8">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Feel free to reach out for any queries or feedback. We'd love to hear from you!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
            Send Message
          </button>
          <p className="text-xs text-gray-500 mt-3">
            We’ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
