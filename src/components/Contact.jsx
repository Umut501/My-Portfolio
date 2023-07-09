import React from 'react';

const Contact = () => {
  const email = 'umutbaybece@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="bg-colorb py-12">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center px-8">
        <div className="md:w-1/2 md:pl-10 ">
          <div className="pb-8">
            <h2 className="text-4xl font-light mb-4 cursor-pointer capitalize text-custom-gray">
              Let's Get In Touch
            </h2>
            <div className="mt-8 flex justify-center items-center">
              <form
                action="https://getform.io/f/b6f12f06-f3b8-4892-a38a-d896d6c9e77b"
                method="POST"
                className="flex flex-col w-full"
              >
                Submit the form below to get in touch with me <br /><br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-blackfocus:outline-none"
                ></textarea>

                <button className="text-custom-gray bg-colorc px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-10 flex justify-center items-center">
          <div className="pb-8">
            <h3 className="text-4xl font-light mb-4 cursor-pointer capitalize text-custom-gray">
              Contact Info
              <br />
            </h3>
            <div className="flex flex-col">
              <label className="text-custom-gray">Location</label>
              <p className="mt-1 text-lg font-semibold">Antalya, Turkey</p>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-custom-gray">Phone</label>
              <p className="mt-1 text-lg font-semibold">+90 541 901 73 39</p>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-custom-gray">Email</label>
              <p className="mt-1 text-lg font-semibold">
                <a href={`mailto:${email}`} onClick={handleEmailClick}>
                  {email}
                </a>
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-custom-gray">LinkedIn</label>
              <p className="mt-1 text-lg font-semibold">
                <a
                  href="https://linkedin.com/in/umut-baybece-6a1303201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/umut-baybece-6a1303201
                </a>
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-custom-gray">GitHub</label>
              <p className="mt-1 text-lg font-semibold">
                <a
                  href="https://github.com/Umut501"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Umut501
                </a>
              </p>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
