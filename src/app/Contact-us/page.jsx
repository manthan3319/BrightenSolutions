import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(0, 0, 0, 1.2)),
          url('images/bg.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white", // Ensures text is visible over the gradient
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <h2 className="text-[43px]"> Let’s Brew Ideas Together</h2>
      </div>

      {/* =========================Form section======================= */}



<div className="">

<p className="mt-32 text-center max-w-[750px] text-xl flex justify-center ">Get in touch with us to explore tailored IT solutions for your business. As a leading IT company, we specialize in web development, software solutions, digital marketing, and IT consulting. Whether you’re looking to build a website, optimize your online presence, or streamline your operations with innovative technology, our team is here to help. Let’s collaborate and turn your ideas into reality!</p>

      <div className="flex flex-col justify-between  md:flex-row bg-gradient-to-br from-blue-100 to-blue-50  rounded-lg shadow-md max-w-[950px] mx-auto my-20 ">
        {/* Contact Information Section */}
        <div className="  border-r border-gray-200">
          <div
            className="w-[450px] h-[550px] rounded-lg"
            style={{
              backgroundImage: `
        linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
        url('/images/formImage.jpg')
      `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-5">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            How do we help?
          </h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Project Description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              rows="4"
            ></textarea>
            <div className="flex items-center space-x-3">
              <label className="block w-full border-dashed border-2 border-gray-300 text-gray-400 text-center py-4 rounded-lg">
                Drag & Drop Files Here or{" "}
                <span className="text-blue-500 underline cursor-pointer">
                  Browse Files
                </span>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">I'm not a robot</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
</div>

    </>
  );
};

export default ContactUs;
