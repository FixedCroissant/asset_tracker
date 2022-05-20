import { Accordion, AccordionPanel, Box, Anchor } from "grommet";
import { Link } from "react-router-dom";
import { useAuth } from "./utils/auth";

const MyAccordion = (props) => {
  const auth = useAuth();

  //Get Inner Menu Items.
  const myInnerMenu = props.innerMenu.map((item) => {
    return (
      <Box key={item.key} pad="medium" background="light-2">
        <Anchor to={item.link} label={item.value} />
        <Link to={item.link}>{item.value}</Link>
      </Box>
    );
  });

  return (
    <Accordion>
      <AccordionPanel key={myInnerMenu} label={props.labelName}>
        {myInnerMenu}
      </AccordionPanel>

      <AccordionPanel label="Account Info">
        {!auth.user && <Link to="login">Login</Link>}

        <Link to="protected">My Protected Page</Link>
      </AccordionPanel>
    </Accordion>
  );
};

export default MyAccordion;
