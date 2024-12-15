"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./style.module.css";

// Updated component to receive data via props
const MetaAdsPackage = ({ title, subtitle, features, buttonText }) => {
  return (
    <div className={`${styles.packageContainer} text-center pt-5 pb-5`}>
      <h2 className="mb-3">
        What all do you <span className={styles.highlight}>{title}</span>
      </h2>
      <p className="mb-4 mt-4 px-5">{subtitle}</p>
      <div className={styles.tableContainer}>
        <table className={`table table-bordered ${styles.table}`}>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className={`${styles.textSuccess} text-center`}>
                  <FaCheckCircle color="#2ECC71" />
                </td>
                <td className="text-light">{feature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className={`btn mt-5 mb-2 ${styles.btn}`}>{buttonText}</button>
    </div>
  );
};

export default MetaAdsPackage;
