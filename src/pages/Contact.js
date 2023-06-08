import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (

    <div id="Contact" className="pb-72 mt-36">



      <div className="table mx-12 lg:mx-60">

        <MailIcon className="h-5 w-5 mr-4 text-purple_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">


        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Whether you have a question, a potential collaboration, or just want to say hello, this is the place to reach out. I'm passionate about what I do, and I'm always eager to explore new opportunities and engage in meaningful conversations.

          </p>
          <form action="#" class="space-y-5">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-purple_vs dark:hover:bg-dark_purp_vs dark:focus:bg-dark_purp_vs">Send Mail</button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3685796030877!2d76.76237477552921!3d30.764233174569085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff35f43ba73ff%3A0xc9723480d879a03d!2sBoys%20Hostel%206!5e0!3m2!1sen!2sin!4v1686234968745!5m2!1sen!2sin"
          width="650"
          height="400"
          style={{
            borderRadius: "20px",
          }}
          allowfullscreen="true"
          loading="lazy"
        ></iframe>

      </div>
    </div>
  );
};

export default Contact;
