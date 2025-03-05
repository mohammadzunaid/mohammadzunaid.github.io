import React from "react";
import dotnet from "../img/dotnet.svg";
import csharp from "../img/csharp.svg";
import angular from "../img/Angular17.png";
import sql from "../img/SQLDB.png";
import docker from "../img/docker.png";
import typescript from "../img/typescript.png";
import html from "../img/html-5.png";
import css from "../img/css-3.png";
import js from "../img/java-script.png";
import github from "../img/github.png";
import git from "../img/git.png";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="gold text-center uppercase">
          Skills <i className="fas fa-tasks"></i>
        </h1>

        <div className="container pt-5 mt-lg-5 justify-content-center row">
          <img
            src={csharp}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay=""
          />
          <img
            src={dotnet}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay=""
          />
          <img
            src={angular}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay=""
          />
          <img
            src={sql}
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
            src={typescript}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
          <img
            src={html}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
          <img
            src={css}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={js}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="500"
          />
          <img
            src={git}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
          <img
            src={github}
            className="img-responsive col-6 col-md-2 py-5"
            data-aos="fade-up"
            delay="0"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
