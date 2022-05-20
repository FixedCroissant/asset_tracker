import React, { useState } from "react";
import { AuthProvider } from "./utils/auth";
import { Outlet, Link } from "react-router-dom";
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

const App = () => {
  //Use state
  const [showSidebar, setShowSidebar] = useState(false);

  //Inner Menu Items
  //const innerMenuItems = ['mainInner'];
  //const innerMenuItems = [{'id':1, 'value':'first','id':2, 'value':'second'}];
  //keep menu items somewhat dynamic
  let innerMenuItems = [
    { key: 1, labelName: "Invoices", value: "Invoices", link: "invoices" },
  ];
  //innerMenuItems.push({id:1,value:'first'});
  //innerMenuItems.push({id:2,value:'second'});

  //Better way
  innerMenuItems = [
    ...innerMenuItems,
    {
      key: 2,
      labelName: "Expenses",
      value: "Expenses",
      link: "expenses",
      labelName: "Our Cities",
      value: "Our Cities",
      link: "cities",
    },
  ];

  return (
    <AuthProvider>
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
                  {process.env.REACT_APP_APPLICATION_NAME}
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
                          key={innerMenuItems}
                          labelName="Main"
                          innerMenu={innerMenuItems}
                        ></MyAccordion>
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
                  <Outlet />
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </AuthProvider>
  );
};

export default App;
