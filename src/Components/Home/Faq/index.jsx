/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import useScreenWidth from "@/Utils/screenWidth";
import { Title } from "@/Common/Title";
import styles from "./styles.module.css";

export const FAQ = ({ title, data, iconCollapsed, iconOpen }) => {
  const screenWidth = useScreenWidth();
  const mobileScreen = screenWidth <= 600 ? true : false;

  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (index) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <section
      className="banner"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `${mobileScreen ? "400px" : "600px"}`,
      }}
    >
      <div className={`container ${mobileScreen ? "" : "mt-5"}`}>
        <Title title={title} width="580px" />

        <div
          className={`container bg-light mt-5 ${mobileScreen ? "p-1" : "p-5"}`}
          style={{ padding: 0 }}
        >
          <table
            style={{ backgroundColor: "#F4F4F4", borderCollapse: "collapse" }}
            className="table table-light"
          >
            <tbody>
              {data?.map((item, index) => (
                <React.Fragment key={index}>
                  <tr
                    onClick={() => toggleRow(index)}
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    <td className={styles.faqNumber} style={{ border: "none" }}>
                      {item.seriel}
                    </td>
                    <td
                      className={styles.faqQuestion}
                      style={{ border: "none" }}
                    >
                      {item.question}
                    </td>
                    <td style={{ border: "none" }}>
                      <img
                        style={
                          openRow === index
                            ? { width: "36px", height: "36px" }
                            : {}
                        }
                        src={openRow === index ? iconOpen : iconCollapsed}
                        alt="Toggle"
                      />
                    </td>
                  </tr>
                  <tr className={`collapse ${openRow === index ? "show" : ""}`}>
                    <td colSpan="3" style={{ border: "none", padding: "10px" }}>
                      <div className={`answer p-1 ${styles.faqAnswer}`}>
                        {item.answer}
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
