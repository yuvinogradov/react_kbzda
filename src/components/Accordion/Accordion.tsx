import React from "react";

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onClick: (collapsed: boolean) => void

};

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onChange: (collapsed: boolean) => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
    function clickHandler(){
        alert('hello')
        // debugger
        props.onClick(!props.collapsed)
    }
    return <h3 onClick={()=>{props.onClick(!props.collapsed)}}>--= {props.title}  =--</h3>;
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
            <AccordionTitle title={props.title}
                            onClick={props.onChange}
                            collapsed={props.collapsed}/>
            {/* {props.collapsed ? "" : <AccordionBody />} */}
            {!props.collapsed && <AccordionBody/>}
        </>
    );
}

export default Accordion;
