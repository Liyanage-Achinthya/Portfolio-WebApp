import React from "react";
import "./Education.css";
import SACK from "../../assets/SACK.png";
import UOM from "../../assets/UOM.png";
import ReadMoreArrow from "../../assets/arrow_icon.svg";

const Education = () => {
  return (
    <section id="edu" className="edu">
      <div className="edu-title" data-aos="fade-up">
        <h1>Education</h1>
      </div>

      <div className="edu-sections" data-aos="fade-right" data-aos-delay="100">
        <div className="edu-item">
          <div className="edu-left">
            <img src={UOM} alt="University of Moratuwa" />
          </div>

          <div className="edu-right">
            <div className="edu-para">
              <h1>University of Moratuwa</h1>
              <h3>• Bachelor of Information Technology (External)</h3>
              <p>
                Currently pursuing a Bachelor’s in Information Technology as an
                external degree at the University of Moratuwa, under the Centre
                for Open and Distance Learning (CODL). Successfully completed
                the first year, earning a Diploma in IT, and now progressing
                through the second year.
              </p>
              <a href="mailto:e2245546@bit.uom.lk">
                <i className="bx bxl-gmail"></i>
              </a>
              <h3>• Trainee – Full Stack Developer</h3>
              <p>
                Enrolled in the Trainee Full Stack Developer program offered by
                the University of Moratuwa through Open Learning Platform,
                focusing on building practical skills in both frontend and
                backend web development.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1IbJbA1Gz-KlLyqjLgd8onv30T3A9n3V0"
                className="edu-certificate-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="edu-readmore">
                  <p>Certificates of Completion</p>
                  <img src={ReadMoreArrow} alt="Arrow icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="edu-sections" data-aos="fade-left" data-aos-delay="200">
        <div className="edu-item">
          <div className="edu-left">
            <img src={SACK} alt="St. Anthony's College Kandy" />
          </div>

          <div className="edu-right">
            <div className="edu-para">
              <h1>St. Anthony's College Kandy (2009 - 2022)</h1>
              <h3>• G.C.E Advanced Level Examination – 2022</h3>
              <h3>• G.C.E Ordinary Level Examination – 2019</h3>
              <p>
                Completed 13 years of education at St. Anthony’s College,
                building a strong academic foundation. Successfully passed the
                G.C.E. Ordinary Level (2019). Traced Mathematics stream for
                G.C.E. Advanced Level (2022), focusing on Combined Mathematics,
                Physics, and Chemistry, and successfully passed the examination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
