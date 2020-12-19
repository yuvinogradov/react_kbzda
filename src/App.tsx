import * as React from "react";
import "./styles.css";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
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
      <PageTitle title={"This is App Component"} />
      Article 1
      <Rating value={3} />
      <Accordion title="Menu" collapsed={true} />
      <Accordion title="Users" collapsed={false} />
      Article 2
      <Rating value={4} />
      Article 3
      <Rating value={5} />
      <OnOff on={true} />
      <OnOff on={false} />
      <OnOff2 on={true} />
      <OnOff2 on={false} />
      <OnOff3 on={true} />
      <OnOff3 on={false} />
    </div>
  );
}

export default App;
