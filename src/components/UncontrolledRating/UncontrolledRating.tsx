import React, { useState } from "react";

type RatingPropsType = {
  // value: number
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

type StarPropsType = {
  selected: boolean;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        alert("hello");
      }}
    >
      {props.selected ? <b>Star </b> : " Star"}
    </span>
  );
}

function UncontrolledRating(props: RatingPropsType) {
  let [value, setValue] = useState(0);
  return (
    <div>
      <Star selected={props.value >= 1} />
      <Star selected={props.value >= 2} />
      <Star selected={props.value >= 3} />
      <Star selected={props.value >= 4} />
      <Star selected={props.value >= 5} />
    </div>
  );
}

export default UncontrolledRating;
