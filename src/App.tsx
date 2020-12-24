import * as React from "react";
import "./styles.css";
import "./App.css";
// import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff, { OnOff2, OnOff3 } from "./components/OnOff/OnOff";

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

function App() {
  return (
    <div className="App">
      {/* <PageTitle title={"This is an App Component"} /> */}
      {/* Article 1
      <Rating value={3} /> */}
      {/* <Accordion title="Menu" collapsed={true} />
      <Accordion title="Users" collapsed={false} /> */}
      {/* UncontrolledAccordion */}
      <UncontrolledAccordion title="Menu" collapsedDefault={true} />
      <UncontrolledAccordion title="Users" collapsedDefault={false} />
      <div>Article 2</div>
      <UncontrolledRating value={4} />
      Article 3
      <UncontrolledRating value={2} />
      <OnOff on={true} />
      <OnOff on={false} />
      <OnOff2 on={true} />
      <OnOff2 on={false} />
      <div>OnOff3:</div>
      <OnOff3 on={true} />
      <OnOff3 on={false} />
    </div>
  );
}

export default App;
