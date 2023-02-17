import React from "react";
import { Navbar, Footer, CareerItem } from "../common";
//comment//
const Career = () => {
  return (
    <div>
      <Navbar careers_active={true} border="border-bottom" />
      <div className="bg-light py-5">
        <div className=" d-flex justify-content-between container">
          <div className="bg-white p-3 shadow-sm rounded col-md-4 career-items">
            <div className="display-6 dollar">Careers</div>
            <CareerItem />
            <CareerItem />
            <CareerItem />
            <CareerItem />
            <CareerItem />
            <CareerItem />
          </div>
          <div className="col-md-8 bg-white shadow-sm ms-2 p-3">
            <div className="display-6 fs-4 ">Frontend Software Developer</div>
            <div className="py-4">
              We are looking for a candidate who is passionate about our mission
              and is ready to join a small team of dedicated and enthusiastic
              individuals. As a Front-end Software developer, you should have a
              keen eye for design and will be responsible for implementing
              visual elements that users see and interact. You will responsible
              for ensuring the alignment of web design and user experience
              requirements, optimizing web pages for maximum efficiency, and
              maintaining brand consistency across all web pages, among other
              duties. You will be required to work in teams alongside back-end
              developers, graphics designers and the rest of team to ensure all
              elements of web creation are consistent. However, you will work
              closely with and supported by Back-end Software Developers.
            </div>
            <div className="display-6 fs-5">
              Day-to-day Duties and Responsibilities{" "}
            </div>
            <div className="py-3">
              <ul>
                <li>Determining the structure and design of web pages</li>
                <li>Ensuring user experience determines design choices</li>

                <li>Developing features to enhance the user experience</li>
                <li>
                  Striking a balance between functional and aesthetic design
                </li>
                <li>Ensuring web design is optimized for smartphones</li>
                <li>Building reusable code for future use</li>
                <li>Optimizing web pages for maximum speed and scalability</li>
                <li>
                  Utilizing a variety of markup languages to write web pages
                </li>
                <li>Maintaining brand consistency throughout the design</li>
              </ul>
            </div>
            <div className="display-6 fs-5">
              Also, a Front-end Software Developer should have these Skills and
              Experiences:
            </div>
            <div className="py-3">
              <ul>
                <li>
                  {" "}
                  Excellent analytical, time management and teamwork skills with
                  a problem-solving attitude
                </li>
                <li> Effectively communicate in English (written & verbal)</li>
                <li> Understanding of key design principle</li>
                <li> Proficiency in HTML, CSS, JavaScript, and jQuery</li>
                <li>Understanding of server-side CSS.</li>
                <li>
                  {" "}
                  Experience with Graphics Designer applications such as Adobe
                  Illustrator
                </li>
                <li> Good problem-solving skills</li>
                <li> Excellent verbal communication skills n</li>
                <li> Good interpersonal skills</li>
                <li>
                  {" "}
                  Good understanding of asynchronous request handing, partial
                  page updates, and AJAX •{" "}
                </li>
                <li>
                  Basic Knowledge of image authoring tools, to be able to crop,
                  resize or perform small adjustments on an image.{" "}
                </li>
                <li>
                  {" "}
                  Proficient understanding of cross-browser compatibility issues
                  and ways to work around them
                </li>
              </ul>
            </div>
            <div className="display-6 fs-5">Minimum Qualifications</div>
            <div className="py-3">
              <ul>
                <li>
                  Bachelor’s degree in computer science, engineering or
                  equivalent industry experience. • Proficient knowledge of
                  JavaScript and jQuery
                </li>
                <li>1 to 2 Years of software engineering experience</li>
              </ul>
            </div>
            <div className="display-6 fs-5">Preferred Qualifications:</div>
            <div className="py-3">
              <ul>
                <li> TypeScript</li>
                <li> React + Redux .</li>
                <li>Next.js</li>
                <li> NodeJS</li>
                <li> Babel + Webpack + Bazel</li>
                <li> Jest + ESLint + Prettier</li>{" "}
                <li> Jenkins / Buildkite + Docker + Kubernetes</li>{" "}
                <li>Figma</li>
                <li>Invision</li>
                <li>
                  Familiarity with tools such as Gimp or Photoshop is a plus.
                </li>
              </ul>
            </div>

            <div className="my-5">
              If your career aspirations match this exciting opportunity, please
              use the link below to apply: Frontend Software Developer. Filling
              the link is mandatory for consideration alongside your application
              to career@atrader.co.tz quoting ‘Frontend Software Developer’ by
              28 February 2023.
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Career;
