import React, { useState } from "react";
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
  const innerMenuItems = ["mainInner"];

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
  );
};

export default App;