import { Accordion, AccordionPanel, Box, Text } from "grommet";

const MyAccordion = (props) => {
  //Get Inner Menu Items.
  const myInnerMenu = props.innerMenu.map((item) => {
    return (
      <Box pad="medium" background="light-2">
        <Text>{item}</Text>
      </Box>
    );
  });

  return (
    <Accordion>
      <AccordionPanel label={props.labelName}>{myInnerMenu}</AccordionPanel>
    </Accordion>
  );
};

export default MyAccordion;
