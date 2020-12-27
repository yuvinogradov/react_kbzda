import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  // value: number
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
};

type StarPropsType = {
  selected: boolean;
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      {props.selected ? <b>Star </b> : " Star"}
    </span>
  );
}

function Rating(props: RatingPropsType) {
  // const rating = [];

  // for (let i = 0; i < 5; i++) {
  //   rating.push(i < props.value);
  // }
  // console.log(rating);

  return (
    <div>
      <Star selected={props.value >= 1} onClick={props.onClick} value={1} />
      <Star selected={props.value >= 2} onClick={props.onClick} value={2} />
      <Star selected={props.value >= 3} onClick={props.onClick} value={3} />
      <Star selected={props.value >= 4} onClick={props.onClick} value={4} />
      <Star selected={props.value >= 5} onClick={props.onClick} value={5} />
    </div>
  );
}

export default Rating;
