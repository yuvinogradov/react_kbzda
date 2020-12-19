import React, { useState } from "react";
import s from "./OnOff.module.css";

type OnOffPropsType = {
  on: boolean;
};

export default function OnOff(props: OnOffPropsType) {
  // my solution. with external css
  return (
    <div className={s.container}>
      <div className={[s.rectangle, props.on && s.on].join(" ")}>On</div>
      <div className={[s.rectangle, !props.on && s.off].join(" ")}>Off</div>
      <div
        className={[s.circle, props.on && s.on, !props.on && s.off].join(" ")}
      ></div>
    </div>
  );
}

export function OnOff2(props: OnOffPropsType) {
  // different way to define styles:
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    margin: "2px",
    backgroundColor: props.on ? "green" : "white"
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "white" : "red"
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red"
  };

  return (
    <div>
      <div style={onStyle}>ON</div>
      <div style={offStyle}>OFF</div>
      <div style={indicatorStyle}></div>
    </div>
  );
}

type OnOff3PropsType = {};

export function OnOff3(props: OnOff3PropsType) {
  // different way to define styles:

  let [on, setOn] = useState(false);

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    margin: "2px",
    backgroundColor: on ? "green" : "white"
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "white" : "red"
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red"
  };

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          setOn(true);
        }}
      >
        ON
      </div>
      <div
        style={offStyle}
        onClick={() => {
          setOn(false);
        }}
      >
        OFF
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
