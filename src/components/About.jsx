import React from "react";
import { Link as ScrollLink } from "react-scroll";
import profilePic from "../img/Mypic.jpg";
import resume from "../img/MohammadZunaid_Resume.pdf";

function About() {
  return (
    <section id="about" className="p-5">
      <div className="container py-4">
        <h1 className="uppercase gold text-center">
          About <i className="fas fa-user"></i>
        </h1>

        <div className=" pt-lg-4">
          <div className="row mt-5 ">
            <div data-aos="fade-right" className="offset-md-1 col-md-5 col-sm-12 text-center">
              <img src={profilePic} alt="" className="img-fluid text-center pt-md-5 pt-lg-0  profile-pic" />
            </div>

            <div data-aos="fade-left" className="offset-md-1 col-md-5 com-sm-12 mt-4 text-white text-justify">
              {/* I'm Sainath Omdas, a passionate full stack web developer with strong understanding of Java and database management.
              I'm a quick learner with good technical &amp; communication skills and I'm capable of handling multiple tasks simultaneously.
              I have been working for Tata Consultancy Services as Systems Engineer since I started my career in 2020.
               I graduated in the stream of Computer Science and Engineering from Anurag Group of
              Institutions in the year of 2020. */}
              A passionate full stack developer with strong understanding of .NET and Angular.
              Also a quick learner with good technical &amp; communication skills and capable of handling multiple tasks simultaneously.
              <br />I enjoy coding and would like to work in a environment where I can prove and improve my skills.
              <div className="mt-5 text-white">
                {/* <ScrollLink to="MohammadZunaid_Resume.pdf" type="button" className="btn btn-sm btn-outline-white disabled " title="Download Resume" target="_blank">
                  Resume&nbsp;&nbsp; <i className="fas fa-file-download"></i>
                </ScrollLink> */}
                <a className="btn btn-outline-white btn-sm" href={resume} download="MohammadZunaid_Resume.pdf">Resume&nbsp;&nbsp; <i className="fas fa-file-download"></i></a>
                <ScrollLink to="contact" spy smooth offset={-60} duration={250} className="ml-lg-5 btn btn-sm btn-outline-white">
                  Hire Me
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
