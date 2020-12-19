import React from "react";

type AccordionTitlePropsType = {
  title: string;
};

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>--= {props.title} =--</h3>;
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

function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={props.title} />
      {/* {props.collapsed ? "" : <AccordionBody />} */}
      {!props.collapsed && <AccordionBody />}
    </>
  );
}

export default Accordion;
