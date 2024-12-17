import React from "react";
import useScreenWidth from "@/utils/screenWidth";

export const Pricing = ({
  title,
  titleSpan,
  buttonText,
  price,
  priceSubTitle,
  svg,
  secondButtonText,
  featuresList1,
  featuresList2,
}) => {
  const screenWidth = useScreenWidth();
  const mobileScreen = screenWidth <= 600 ? true : false;

  // Custom styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const titleStyle = {
    height: "50px",
    fontFamily: "creato display",
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "15px",
  };

  const spanStyle = {
    fontFamily: "creato display",
    fontSize: "48px",
    fontWeight: "800",
  };

  const boxStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "900px",
    margin: "auto",
    border: "3px solid transparent",
    borderImage: "linear-gradient(to right, #02FF3A, #0A9642) 1",
    textAlign: "center",
    marginTop: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#042411",
    color: "white",
    borderRadius: "30px",
    height: "43px",
    width: mobileScreen ? "130px" : "150px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    marginBottom: "20px",
    display: "inline-block",
  };

  const textStyle = {
    color: "black",
    height: mobileScreen ? "34px" : "61px",
    fontSize: mobileScreen ? "32px" : "58px",
    fontWeight: "700",
    fontFamily: "Creato Display",
    textAlign: "center",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    color: "black",
    height: mobileScreen ? "38px" : "70px",
    fontSize: mobileScreen ? "16px" : "30px",
    fontWeight: "400",
    fontFamily: "Creato Display",
    textAlign: "center",
    marginBottom: "50px",
    width: mobileScreen ? "80%" : "65%",
    margin: "0 auto",
  };

  const secondButtonStyle = {
    background: "linear-gradient(to right, #0A9642, #02FF3A)",
    color: "black",
    height: mobileScreen ? "40px" : "73px",
    borderRadius: "5px",
    width: mobileScreen ? "70%" : "35%",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    border: "none",
    marginBottom: "20px",
    display: "inline-block",
  };

  // Adjust the columnStyle to center content on mobile screens
  const columnStyle = {
    display: "flex",
    flexDirection: mobileScreen ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    gap: mobileScreen ? "30px" : "30px",
    marginBottom: "35px",
    marginLeft: mobileScreen ? "55px" : "",
    textAlign: "center",
  };

  const columnItemStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const svgTextStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: mobileScreen ? "0px" : "15px",
    height: "30px",
  };

  const svgStyle = {
    width: mobileScreen ? "8px" : "15px",
    height: mobileScreen ? "8px" : "15px",
  };

  const textStyleSvg = {
    fontSize: mobileScreen ? "12px" : "24px",
    fontWeight: "400",
    height: "30px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <section
      className="banner"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F8F8F8",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "850px",
        fontFamily: "'Cera Pro', 'Creato Display', sans-serif",
      }}
    >
      <div className="mt-4">
        <div style={containerStyle}>
          {/* Title and Subtitle */}
          {!mobileScreen && (
            <div style={titleStyle}>
              {title} <span style={spanStyle}>{titleSpan}</span>
            </div>
          )}

          <div style={boxStyle}>
            <button style={buttonStyle}>{buttonText}</button>
            <div style={textStyle}>{price}</div>
            <div style={subtitleStyle}>{priceSubTitle}</div>

            {/* Features List Section */}
            <div className="mt-4" style={columnStyle}>
              <div style={columnItemStyle}>
                {featuresList1.map((feature, index) => (
                  <div key={index} style={svgTextStyle}>
                    <img src={svg} alt="SVG" style={svgStyle} />
                    <div style={textStyleSvg}>{feature.desc}</div>
                  </div>
                ))}
                {mobileScreen && (
                  <div style={columnItemStyle}>
                    {featuresList2.map((feature, index) => (
                      <div key={index} style={svgTextStyle}>
                        <img src={svg} alt="SVG" style={svgStyle} />
                        <div style={textStyleSvg}>{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {!mobileScreen && (
                <div style={columnItemStyle}>
                  {featuresList2.map((feature, index) => (
                    <div key={index} style={svgTextStyle}>
                      <img src={svg} alt="SVG" style={svgStyle} />
                      <div style={textStyleSvg}>{feature.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button style={secondButtonStyle}>{secondButtonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
