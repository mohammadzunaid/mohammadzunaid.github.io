import React from "react";
import dotnet from "../img/dotnet.svg";
import csharp from "../img/csharp.svg";
import angular from "../img/Angular17.png";
import sql from "../img/SQLDB.png";
import docker from "../img/docker.png";
import react from "../img/react.webp";
import git from "../img/git.png";
import python from "../img/python.png";
import langchain from "../img/langchain";
import ai from "../img/ai.png";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="gold text-center uppercase">
          Skills <i className="fas fa-tasks"></i>
        </h1>

        <div className="container pt-5 mt-lg-5 justify-content-center row">
          <img
            src={python}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={ai}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={langchain}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={angular}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={react}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={docker}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={csharp}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={dotnet}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />       
          <img
            src={sql}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={git}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
