import React, { useState, useEffect } from "react";
import { Outlet,Link } from "react-router-dom";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from "grommet";
import { FormClose, Menu } from "grommet-icons";
import axios from 'axios';

//Components
import MyAccordion from "./Accordian";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

//temp
let myData = [ {
  name: "Santa Monica",
  number: 1995,
  amount: "$10,800",
  due: "12/05/1995"
}];

const App = () => {
  

  //Use state
  const [showSidebar, setShowSidebar] = useState(false);
  let [information,setInformation] = useState(false);

  //Inner Menu Items
  const innerMenuItems = ["mainInner"];

  //Use effect to pull in API
  useEffect(() => {
    axios
      .get("http://10.152.39.73:105/json/jsonreturn")
      .then( response => {
          console.log(response.data)
          setInformation(response.data)
        
          
      }).catch((error) => {
        console.log(error);
      });
  }, [setInformation]);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Button
                icon={<Menu />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
              <Heading level="3" margin="none">
                App Name
              </Heading>
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    <Box flex width="large">
                      <MyAccordion
                        labelName="Main"
                        innerMenu={innerMenuItems}
                      ></MyAccordion>
                      <Link to="/invoices">Invoices</Link> |{" "}
                      <Link to="/expenses">Expenses</Link>
                      Hello
                    </Box>
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
              <Box flex align="center" justify="center">
                app body

                {myData.map(info=>(
                    info.name

                ))}
                <Outlet />
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
