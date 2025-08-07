import footerData from "../data/footerData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonText: "Got it!",
        confirmButtonColor: "#DC2626",
      });
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      Swal.fire({
        title: "Coming Soon! 📬",
        text: "This subscription feature isn't live yet. Stay tuned!",
        icon: "info",
        confirmButtonColor: "#1F2937",
        confirmButtonText: "Alright!",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="space-y-3">
          <h3 className="flex items-center text-2xl font-bold gap-2">
            <i className={`${footerData.brand.icon} text-2xl`} />
            <span>{footerData.brand.name}</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {footerData.brand.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold border-b pb-2 border-gray-300 dark:border-gray-700">
            <i className={`${footerData.navigationIcon} mr-2`} />
            Navigation
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {footerData.navigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold border-b pb-2 border-gray-300 dark:border-gray-700">
            <i className={`${footerData.socialsIcon} mr-2`} />
            Find Me Online
          </h4>
          <ul className="flex flex-wrap gap-4">
            {footerData.socials.map((social, index) => (
              <li key={index}>
                <Tippy content={social.label} placement="top">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow hover:shadow-xl hover:ring-2 hover:ring-blue-500 transform hover:scale-110 transition-all duration-300">
                      <i className={`${social.icon} text-xl`} />
                    </div>
                  </a>
                </Tippy>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Form */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold border-b pb-2 border-gray-300 dark:border-gray-700 flex items-center gap-2">
            <i className="bx bx-mail-send" />
            {footerData.formSubscription.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {footerData.formSubscription.description}
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={footerData.formSubscription.placeholder}
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Tippy content="Subscribe to my newsletter!">
              <button
                type="button"
                onClick={handleSubscribe}
                disabled={submitting}
                className={`px-4 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-md font-semibold flex items-center justify-center gap-2 shadow hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 ${submitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {footerData.formSubscription.buttonText}
                <i className="bx bx-send text-lg" />
              </button>
            </Tippy>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-16 pt-6 border-gray-300 dark:border-gray-700" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-300 gap-4">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {footerData.legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-center md:text-right">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
