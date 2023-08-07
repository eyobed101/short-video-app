import React from "react";
import Ticker from "react-ticker";
// import "./styles.css";

export default function Tickers() {
  return (
    <Ticker style={{fontFamily: "sans-serif",
        textAlign: "center"}}>
      {({ index }) => (
        <>
          <h1 style={{ paddingRight: "0.5em" }}>
            This is the Headline of element #{index}!
          </h1>
        </>
      )}
    </Ticker>
  );
}
