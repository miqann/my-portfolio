import React from "react";
import testerImg from "../../assets/images/tester.svg";
import backendImg from "../../assets/images/backend.svg";
import frontendImg from "../../assets/images/front-end.svg";

const Services = () => {
  return (
    <section id="service">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            This is what I have done so far!
          </h2>
          <p className="lg:max-w-[600] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Although I have taken on fewer jobs in the past, I have devoted my
            time and energy to academic pursuits to develop a strong foundation
            of knowledge and skills. I believe that my academic background,
            combined with my enthusiasm and willingness to learn, make me a
            strong candidate for any job requirements. I am eager to take on new
            challenges, expand my knowledge, and contribute to a dynamic team
            environment.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Left */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          DIGIME CO.,LTD
                        </h3>
                        <p className="text-primaryColor font-[700] mb-3 text-[18px] group-hover:text-white">
                          Raw Analyst <br />
                          (Jul 2022 - Sep 2022)
                        </p>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white leading-7">
                          - Collects, analyzes large volumes of raw data from
                          various sources. <br />
                          - Collabs with other teams to understand their data
                          needs and make informed decisions. <br />- Maintains
                          data quality standards and ensures data accuracy and
                          completeness.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={testerImg} alt="testerImg" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          TikaTika Connect
                        </h3>
                        <p className="text-primaryColor font-[700] mb-3 text-[18px] group-hover:text-white">
                          Intern Tester <br />
                          (Jun 2021 - Aug 2021)
                        </p>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white leading-7">
                          - Creates test scripts and performs manual tests to
                          identify defects or issues in the software (website
                          and mobile app). <br />
                          - Collabs with project managers to prioritize and
                          schedule testing activities.
                          <br />- Writes daily reports, test cases and checks
                          requirements to ensure products are reliable,
                          functional and meet the expectations of end users.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="backendImg" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Ekino Vietnam
                        </h3>
                        <p className="text-primaryColor font-[700] mb-3 text-[18px] group-hover:text-white">
                          Front-End Developer <br />
                          (Apr 2023 - Present)
                        </p>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white leading-7">
                          - Build responsive, interactive web apps using React,
                          TypeScript, Webpack, and modern frontend tools. <br />
                          - Write clean, maintainable code following best
                          practices like unit testing, version control,
                          continuous integration, and design patterns. <br />-
                          Review project details and develop the application or
                          features.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="frontendImg" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
