import React, { useState } from "react";

type RatingPropsType = {
  // value: number
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

type StarPropsType = {
  selected: boolean;
  //   value: 0 | 1 | 2 | 3 | 4 | 5;
  setValue: () => void;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.setValue();
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
      <Star
        selected={value >= 1}
        setValue={() => {
          setValue(1);
        }}
      />
      <Star
        selected={value >= 2}
        setValue={() => {
          setValue(2);
        }}
      />
      <Star
        selected={value >= 3}
        setValue={() => {
          setValue(3);
        }}
      />
      <Star
        selected={value >= 4}
        setValue={() => {
          setValue(4);
        }}
      />
      <Star
        selected={value >= 5}
        setValue={() => {
          setValue(5);
        }}
      />
    </div>
  );
}

export default UncontrolledRating;
