import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Correctly imported

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-16 text-center bg-gradient-to-r from-red-300 via-blue-500 to-pink-800 bg-[length:200%_200%] animate-gradient text-white"
    >
      {/* Updated Heading with Lighter Gradient and Animation */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500 mb-8 animate-pulse">
        Get in Touch
      </h2>

      <div className="space-y-6 text-lg">
        {/* Email Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaEnvelope className="text-3xl" />
          <a
            href=""
            className="hover:text-blue-900 transition-colors duration-300"
          >
            samadsaba450@gmail.com
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaLinkedin className="text-3xl" />
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors duration-300"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* GitHub Section */}
        <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105">
          <FaGithub className="text-3xl" />
          <a
            href="https://github.com/sabasamad262"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition-colors duration-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
