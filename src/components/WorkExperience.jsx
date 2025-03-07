import React, { useEffect } from "react";

function WorkExperience() {
  return (
    <section
      id="work-experience"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="container">
        <h1 className="gold text-center uppercase">
          Work Experience <i className="fas fa-light fa-briefcase"></i>
        </h1>

        <div className="container pt-md-4">
          <ul className="timeline p-4 offset-md-1 col-md-10">
            <li>
              <div data-aos="fade-left">
                <span className="gold card-title">
                  Engineer II
                </span>
                <div>
                  <span className="gold col-12 col-md-6 pl-0">
                    <i className="fa fa-building mr-1" aria-hidden="true"></i>
                    Deloitte
                  </span>
                  <small className="gold col-12 col-md-3 float-md-right">
                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                    September 2022 - Present
                  </small>
                </div>
                <div className="text-white text-justify container">
                  <ul>
                    <li>
                      Designed and optimized database entities and relationships in PostgreSQL.
                    </li>
                    <li>
                      Developed dynamic, responsive web pages and network graphs using D3.js and AntV.
                    </li>
                    <li>
                      Upgraded the Angular application from version 10 to 12.
                    </li>
                    <li>
                      Configured RabbitMQ for seamless communication between services.
                    </li>
                    <li>
                      Integrated the application with external assets using webhooks and exposed REST APIs.
                    </li>
                    <li>
                       Implemented containerization of services using Docker.
                    </li>
                    
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div data-aos="fade-left" delay="500">
                <span className="gold card-title">Software Engineer</span>
                <div>
                  <span className="gold col-12 col-md-6 pl-0">
                    <span className="fa fa-building mr-1" aria-hidden="true"></span>
                    Prokarma
                  </span>
                  <small className="gold col-12 col-md-3 float-md-right">
                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                    Mar 2021 - August 2022
                  </small>
                </div>
                <div className="text-white text-justify container">
                  <ul>
                    <li>
                      Design and develop software solutions by gathering
                    requirements from the client
                    </li>
                    <li>
                      Actively participate in planning, tracking and manage
                      deliverables in Agile environment
                    </li>
                    <li>
                      Developed product features using primarily
                      C#, .Net Core, Entity Framework Core, Angular, SQL Server
                    </li>
                    <li>
                      Collaborated in team-based, Agile environment to
                      accomplish objectives by deadlines
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div data-aos="fade-left" delay="500">
                <span className="gold card-title">Senior System Engineer</span>
                <div>
                  <span className="gold col-12 col-md-6 pl-0">
                    <span className="fa fa-building mr-1" aria-hidden="true"></span>
                    Infosys
                  </span>
                  <small className="gold col-12 col-md-3 float-md-right">
                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                    Dec 2017 - Mar 2021
                  </small>
                </div>
                <div className="text-white text-justify container">
                  <ul>
                    <li>
                      Developed user interface components using Angular 8, HTML5, CSS3, and Bootstrap
                    </li>
                    <li>
                      Develop WebApi using .Net Core and Entity Framework Core by following REST guidelines.
                    </li>
                    <li>
                      Investigated issues and defects to determine problem root
                      cause.
                    </li>
                    <li>
                      Creating testcases using Nunit, Jasmine and Karma.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
