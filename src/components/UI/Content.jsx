import React from "react";
import CountUp from "react-countup";
import myself from "../../assets/images/myself.png";

export const Content = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basic-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[18px]"
            >
              Hello, welcome to my portfolio!
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Nguyen Minh Quan <br />
              Front-End Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Contact me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See my Projects
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[16px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Detail-oriented and results-driven Frontend Developer with 2 years
              of professional experience crafting responsive, user-centric web
              applications. Proficient in modern front-end technologies
              including ReactJS, JavaScript, and HTML/CSS, with a strong
              understanding of component-based architecture and performance
              optimization. Adept at collaborating with cross-functional teams,
              delivering clean and maintainable code, and continuously learning
              new technologies. Known for strong time management, clear
              communication, and a proactive approach to problem-solving.
              Passionate about building seamless digital experiences that
              balance function and aesthetics.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[16px] font-[600]">
                Find me at:
              </span>
              <span>
                <a
                  href="https://github.com/MiQannn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/MiQannn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/miqan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/miquwuan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basic-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                data-aos="fade-left"
                data-aos-duration="1500"
                src={myself}
                alt=""
              />
            </figure>
          </div>
          <div className="md:basisc-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={90} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Rate of Success
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Work Fulltime
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
