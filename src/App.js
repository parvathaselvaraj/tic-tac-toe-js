import "./App.css";
import React from "react";

// import React, { useState } from "react";
// import _ from "lodash";
// import TicTacToe from "./Components/TicTacToe.js";
// import Accordion from "./Components/Accordion.js";
// import TabBar from "./Components/TabBar.js";
// import ClickClose from "./Components/ClickClose.js"
// import BreadCrumb from "./Components/BreadCrumb.js"
// import ToDoListInput from "./Components/ToDoListInput";
// import Banner from "./Components/Banner";
import TableData from "./Components/TableData";

function App() {
  // const [visible, setVisible] = useState(true)
  return (
    <div>
      {/* <TicTacToe />  */}
      {/* <Accordion heading="Accordian" content="kfjbsfbsfbksfks"/> */}
      {/* <Accordion heading="Accordian 2" content="kfjbsfbsfbksfks"/> */}
      {/* <TabBar tabs={["Home", "Menu", "Nav"]} /> */}
      {/* <ClickClose /> */}
      {/* <BreadCrumb tabs={["Menu", "Home", "Settings", "Edit", "Tools"]}/>
      <ToDoListInput /> */}
      {/* <Banner message={56 + "jhdjshgfjsdgfjh"} />
      <Banner
        hasAction={true}
        message={56 + "jhdjshgfjsdgfjh"}
        action={{ onClick: () => console.log("clicked"), text: "hi" }}
      />
      <Banner
        hideBanner={() => setVisible(!visible)}
        isVisible={visible}
        hasAction
        closeButtonText="close"
        message="hello world "
        action={{ onClick: () => console.log("clicked"), text: "click here" }}
      />
      <Banner
        message={"Hello"}
        bannerStyle={{ color: "red", fontWeight: 700 }}
      />
      <Banner isVisible={false} message={"heyy"} />
      <Banner message={"watch movies"} /> */}
      <TableData
        data={[
          {
            id: 1,
            first_name: "Con",
            gender: "Female",
            language: 35,
            english: 34,
            maths: 54,
            science: 1,
            social: 64,
          },
          {
            id: 2,
            first_name: "Rebbecca",
            gender: "Female",
            language: 43,
            english: 90,
            maths: 65,
            science: 44,
            social: 25,
          },
          {
            id: 3,
            first_name: "Felicity",
            gender: "Female",
            language: 42,
            english: 59,
            maths: 42,
            science: 56,
            social: 8,
          },
          {
            id: 4,
            first_name: "Faber",
            gender: "Male",
            language: 100,
            english: 97,
            maths: 99,
            science: 73,
            social: 79,
          },
          {
            id: 5,
            first_name: "Serge",
            gender: "Male",
            language: 50,
            english: 92,
            maths: 80,
            science: 14,
            social: 43,
          },
        ]}
      />
    </div>
  );
}
export default App;
