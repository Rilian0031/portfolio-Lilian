import React from "react";

const Resume = () => {
  return (
    <div>
      <section id="resume" className="bg-white py-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-2 text-4xl font-bold">Resume</h2>

            <div className="w-24 h-1 bg-blue-500 mx-auto mt-[2px]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-l-4 border-r-4 border-blue-500 px-4">
            <div className=" border-r-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <div className="w-16 h-1 bg-blue-500 mb-4"></div>
              <div className="mb-6">
                <h4 className="text-xl font-bold">
                  Certificate in Web Development
                </h4>
                <p className="text-gray-600">2024 - 2024</p>
                <p className="text-gray-800">MEST Africa</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold">
                  Certificate in Health And Safety Environment
                </h4>
                <p className="text-gray-600">2021 - 2021</p>
                <p className="text-gray-800">GOOGPRO</p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold">
                  Bachelor of Science in Marketing
                </h4>
                <p className="text-gray-600">2012 - 2016</p>
                <p className="text-gray-800">
                  University of Professional Studies, Accra
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Professional Experience
              </h3>
              <div className="w-16 h-1 bg-blue-500 mb-4"></div>
              <div className="mb-6">
                <h4 className="text-xl font-bold">Frontend Developer</h4>
                <p className="text-gray-600">2024 - Present</p>
                <p className="text-gray-800">Full-Time</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Designed intuitive web apps</li>
                  <li>
                    Contributed to the Mobile Wallet Fraud Database open source
                    project
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold">Customer Service Agent</h4>
                <p className="text-gray-600">2021 - 2024</p>
                <p className="text-gray-800">
                  Multichoice Ghana Limited, Accra
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Provided excellent customer service and resolved issues
                  </li>
                  <li>
                    {" "}
                   Handled inbound and outbound calls
                  </li>
                  <li>Ensured first call resolution and updated customer databases</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold">Customer Service Agent</h4>
                <p className="text-gray-600">2021 - 2024</p>
                <p className="text-gray-800">
                  TLM Ghana Limited, Accra
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Provided excellent customer service and resolved issues
                  </li>
                  <li>
                    {" "}
                   Handled inbound and outbound calls
                  </li>
                  <li>Conducted seminars and presentations for schools</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold">Supervisor</h4>
                <p className="text-gray-600">2021 - 2024</p>
                <p className="text-gray-800">
                  Ohene Cocoa Ghana, Accra
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Set production targets and assisted employees
                  </li>
                  <li>
                    {" "}
                   Organized workflow and supported problem
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
