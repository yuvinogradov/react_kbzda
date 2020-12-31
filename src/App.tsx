import * as React from "react";
import "./styles.css";
import "./App.css";
// import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
// import UncontrolledOnOff, {OnOff2, OnOff3} from "./components/UncontrolledOnOff/OnOff";
import Rating from "./components/Rating/Rating";
import {useState} from "react";
import {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import ControlledOnOff from "./components/ControlledOnOff/ControlledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOff";

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn]= useState<boolean>(false);

    return (
        <div className="App">
            {/* <PageTitle title={"This is an App Component"} /> */}
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title="Menu (controlled accordion)" collapsed={accordionCollapsed}
                       onChange={setAccordionCollapsed}/>
            {/*<Accordion title="Users (controlled accordion)" collapsed={accordionCollapsed}*/}
            {/*           onClick={setAccordionCollapsed}/>*/}
            {/* UncontrolledAccordion */}
            <UncontrolledAccordion title="Menu" collapsedDefault={true}/>
            <UncontrolledAccordion title="Users" collapsedDefault={false}/>
            <div>Article 2</div>
            <UncontrolledRating value={4}/>
            Article 3
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledOnOff on={true}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
            {/*<OnOff2 on={true}/>*/}
            {/*<OnOff2 on={false}/>*/}
            {/*<div>OnOff3:</div>*/}
            {/*<OnOff3 on={true}/>*/}
            {/*<OnOff3 on={false}/>*/}

            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>

            {/*<ControlledOnOff on={true}/>*/}
        </div>
    );
}

export default App;
