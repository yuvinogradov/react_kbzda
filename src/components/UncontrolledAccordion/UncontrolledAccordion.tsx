import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

type AccordionTitlePropsType = {
  title: string;
};

type AccordionPropsType = {
  title: string;
  collapsedDefault: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
}

function UncontrolledAccordion(props: AccordionPropsType) {
  let [isCollapsed, setCollapsed] = useState<Boolean>(props.collapsedDefault);
  const collapseButtonClickHandler = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <>
      <AccordionTitle title={props.title} />{" "}
      <IconButton
        color="primary"
        aria-label="Show/Hide"
        onClick={collapseButtonClickHandler}
      >
        {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
      {/* {props.collapsed ? "" : <AccordionBody />} */}
      {!isCollapsed && <AccordionBody />}
    </>
  );
}

export default UncontrolledAccordion;
