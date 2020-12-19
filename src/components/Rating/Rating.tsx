import React from "react";

type RatingPropsType = {
  // value: number
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

type StarPropsType = {
  selected: boolean;
};

function Star(props: StarPropsType) {
  if (props.selected) {
    return (
      <span>
        <b>Star </b>
      </span>
    );
  } else {
    return <span>Star </span>;
  }
}

function Rating(props: RatingPropsType) {
  // const rating = [];

  // for (let i = 0; i < 5; i++) {
  //   rating.push(i < props.value);
  // }
  // console.log(rating);

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

export default Rating;
