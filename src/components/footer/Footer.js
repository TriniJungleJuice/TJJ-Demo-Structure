import React from "react";
import { Image } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      style={{
        height: "35vh",
        backgroundColor: "#212121",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop:30
      }}
    >
      <div
        style={{
          display: "flex",
          height: "15%",
          color: "blue",
          // backgroundColor: "yellow",
          alignItems: "center",
        }}
      >
        <marquee style={{ color: "red" }}>
          Disclaimer Notice: TriniJungleJuice.com is not responsible for the
          cancellation, change of date or venue of events. Always check with the
          event promoter(s) for accuracy of the information provided herein. We
          are not responsible for typos, accuracy, and/or other errors and
          omissions in the information provided by other parties.
          TriniJungleJuice.com is not affiliated with any promotions or
          promoters, unless specifically stated.
        </marquee>
      </div>
      <div style={{ display: "flex", height: "70%", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            width: "33%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={require("../../assets/tjj-logo.png")} />
        </div>
        <div style={{ display: "flex", width: "33%", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#">Store</a>
            <a href="#">Carnival</a>
            <a href="#">Events</a>
            <a href="#">Photos</a>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="#">Videos</a>
            <a href="#">Music</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "34%",
            color: "white",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          221B, Baker Street, 90265
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "15%",
          color: "gray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {"\u00A9"} 2023 Copyright: Trini Jungle Juice | Made by Renderbit
        Technologies
      </div>
    </div>
  );
}
