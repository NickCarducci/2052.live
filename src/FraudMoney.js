import React from "react";

class FraudMoney extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: "750px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "750px",
            left: "0px"
          }}
        >
          {!this.props.iframe && (
            <iframe
              style={{
                width: "550px",
                height: "700px"
              }}
              title="$70k/yr printed, $300k/yr promised"
              src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=D2jW&width=500&height=600`}
              scrolling="no"
              className="embed-container1"
            />
          )}
        </div>
      </div>
    );
  }
}
export default FraudMoney;
