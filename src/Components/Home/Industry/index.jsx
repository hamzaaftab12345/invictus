import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Industries = ({ heading, industries }) => {
  return (
    <section className="py-5 text-center">
      <h2 className="mb-5">
        {heading?.split(" ")[0]}{" "}
        <span className="fst-italic fw-bold">{heading?.split(" ")[1]}</span>
      </h2>
      <div className="container">
        <div className="row gy-4">
          {industries.map((industry) => (
            <div key={industry.id} className="col-6 col-md-4">
              <div className="d-flex flex-column align-items-center">
                <div
                  className=" p-5 mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #37E137 0%, #1E7B1E 100%)",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: "20px",
                  }}
                >
                  <img
                    src={industry.icon}
                    alt={industry.text}
                    style={{ maxWidth: "60px", maxHeight: "60px" }}
                  />
                </div>
                <p className="mb-0">{industry.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
