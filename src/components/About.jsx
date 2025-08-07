import aboutData from "../data/aboutData.jsx";
import Tippy from "@tippyjs/react";
import Swal from "sweetalert2";

const About = () => {
    const resumeButtonClasses = `inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${aboutData.resume.type === "primary"
        ? "bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"
        : "border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
        }`;

    return (
        <section
            id="about"
            className="bg-white dark:bg-gray-900 pt-20 min-h-screen"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                {/* Header */}
                <header className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        {aboutData.title}
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {aboutData.subtitle}
                    </p>
                </header>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div data-aos="zoom-in" className="flex justify-center lg:justify-start">
                        <div className="relative group">
                            <img
                                src={aboutData.image}
                                alt="About me"
                                className="w-full max-w-sm md:max-w-md rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl transition-transform duration-300 group-hover:scale-105 object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-2 ring-offset-2 ring-gray-800 dark:ring-white opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-10 text-gray-800 dark:text-white">
                        {/* Two Boxes */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Who Am I */}
                            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg shadow-md">
                                        <i className={`bx ${aboutData.aboutNarrative.whoAmI.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold">Who Am I</h3>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {aboutData.aboutNarrative.whoAmI.text}
                                </p>
                            </div>

                            {/* My Approach */}
                            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg shadow-md">
                                        <i className={`bx ${aboutData.aboutNarrative.approach.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold">My Approach</h3>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {aboutData.aboutNarrative.approach.text}
                                </p>
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <i className="bx bx-info-circle text-2xl"></i>
                                <h4 className="text-xl font-semibold">Personal Info</h4>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {aboutData.biodata.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg shadow-md">
                                            <i className={`${item.icon} text-xl`}></i>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-medium">{item.label}</span>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{item.value}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resume Button */}
                        <div className="pt-4">
                            <Tippy content="Download My Resume">
                                <button
                                    onClick={() =>
                                        Swal.fire({
                                            title: "Not Available Yet 😅",
                                            text: "My resume is still in progress. Please check back later!",
                                            icon: "info",
                                            confirmButtonColor: "#1F2937",
                                            confirmButtonText: "Alright",
                                        })
                                    }
                                    className={resumeButtonClasses}
                                >
                                    <i className={`${aboutData.resume.icon} text-lg mr-2`}></i>
                                    {aboutData.resume.label}
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
