import React from "react";
import useScreenWidth from "@/utils/screenWidth";

export const WhyChooseUs = ({ title, titleSpan, subTitle, image, data }) => {
  const screenWidth = useScreenWidth();
  const mobileScreen = screenWidth <= 600 ? true : false;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
  };

  const titleStyle = {
    fontFamily: "creato display",
    fontSize: mobileScreen ? "24px" : "48px",
    textAlign: "center",
    marginBottom: "25px",
  };

  const spanStyle = {
    fontFamily: "creato display",
    fontSize: mobileScreen ? "24px" : "48px",
    fontWeight: "800",
  };

  const subtitleStyle = {
    fontSize: mobileScreen ? "20px" : "24px",
    fontWeight: "400",
    fontFamily: "Creato display",
    textAlign: mobileScreen ? "center" : "left",
  };

  const subTitleMain = {
    fontSize: mobileScreen ? "12px" : "24px",
    fontWeight: "400",
    fontFamily: "creato display",
    textAlign: "center",
  };

  const gridContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "20px",
    gap: "25px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "25px",
  };

  const singleItemRowStyle = {
    display: "flex",
    justifyContent: "left",
    width: mobileScreen ? "100%" : "90%",
  };

  const itemStyle = {
    flex: 1,
    textAlign: "left",
    marginTop: "10px",
  };

  const itemTitleStyle = {
    fontFamily: "creato display",
  };

  const title1Style = {
    fontWeight: "800",
    fontSize: mobileScreen ? "50px" : "60px",
    textAlign: mobileScreen ? "center" : "left",
  };

  const title2Style = {
    fontWeight: "700",
    fontSize: "28px",
    textAlign: mobileScreen ? "center" : "left",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const lineStyle = {
    backgroundColor: "#37E137",
    height: mobileScreen ? "30px" : "37px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  };

  const lineTextStyle = {
    color: "#000000",
    fontSize: mobileScreen ? "20px" : "24px",
    fontWeight: "400",
    backgroundColor: "#37E137",
    textAlign: mobileScreen ? "center" : "left",
  };

  const flexContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "25px",
  };

  const columnStyle = {
    flex: 1,
    margintop: mobileScreen ? "15px" : "0px",
  };

  return (
    <div
      style={{
        width: mobileScreen ? "90%" : "75%",
        minHeight: "1000px",
        margin: "auto",
      }}
    >
      <div style={containerStyle}>
        <div style={titleStyle}>
          {title} <span style={spanStyle}>{titleSpan}</span>
        </div>
        <div style={subTitleMain}>{subTitle}</div>

        <div style={flexContainerStyle}>
          <div style={columnStyle}>
            <div style={gridContainerStyle}>
              {mobileScreen ? (
                data.map((item, index) => (
                  <>
                    <div key={index} style={singleItemRowStyle}>
                      <div style={itemStyle}>
                        <div style={subtitleStyle}>{item.subTitle}</div>
                        <div style={itemTitleStyle}>
                          <div style={title1Style}>{item.title}</div>
                          <div style={title2Style}>{item.titleSpan}</div>
                        </div>
                        <div style={lineStyle}>
                          <div style={lineTextStyle}>{item.footer}</div>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <>
                  <div style={rowStyle}>
                    {data.slice(0, 2).map((item, index) => (
                      <div key={index} style={itemStyle}>
                        <div style={subtitleStyle}>{item.subTitle}</div>
                        <div style={itemTitleStyle}>
                          <div style={title1Style}>{item.title}</div>
                          <div style={title2Style}>{item.titleSpan}</div>
                        </div>
                        <div style={lineStyle}>
                          <div style={lineTextStyle}>{item.footer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={singleItemRowStyle}>
                    <div style={itemStyle}>
                      <div style={subtitleStyle}>{data[2].subTitle}</div>
                      <div style={itemTitleStyle}>
                        <div style={title1Style}>{data[2].title}</div>
                        <div style={title2Style}>{data[2].titleSpan}</div>
                      </div>
                      <div style={lineStyle}>
                        <div style={lineTextStyle}>{data[2].footer}</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {mobileScreen && (
                <div style={columnStyle}>
                  <img src={image} alt="Why Choose Us" style={imageStyle} />
                </div>
              )}
            </div>
          </div>
          {!mobileScreen && (
            <div style={columnStyle}>
              <img src={image} alt="Why Choose Us" style={imageStyle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
