import React from "react";

function Team() {
  return (
    <div className="container py-4 py-md-5">

      <div className="row align-items-center text-center text-md-start">

        {/* Image Section */}
        <div className="col-lg-4 col-12 mb-4 text-center">
          <img
            src="media/images/nit_mishra.jpeg"
            alt="Developer"
            className="img-fluid"
            style={{
              maxWidth: "350px",
              height: "350px",
              borderRadius: "40%",
              objectFit: "cover",
            }}
          />

          <p className="mt-3">
            <i>Dev By Nitendra nit mishra</i>
          </p>
        </div>

        {/* Text Section */}
        <div className="col-lg-8 col-12">
          <p style={{ lineHeight: "30px" }}>
            Nitendra Mishra is a passionate developer currently focused on building real-world projects and overcoming challenges through consistent learning and practice. He started his journey in development with a strong curiosity for technology and a desire to create something meaningful.

            <br /><br />

            Currently, he is working on his personal AI assistant project “Noor”, where he is exploring voice recognition, automation, and intelligent systems. Through this project, he aims to understand how real-world AI applications are built and how they can be improved.

            <br /><br />

            He is continuously improving his skills in development and building projects to strengthen his portfolio. His goal is to become a skilled AI developer and create impactful solutions in the future.

            <br /><br />

            When not coding, he spends time exploring new ideas, learning new technologies, and improving his problem-solving mindset.

            <br /><br />

            Connect on GitHub / LinkedIn
          </p>
        </div>

      </div>

    </div>
  );
}

export default Team;