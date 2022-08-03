import Section from "../Section";
import Wrapper from "../Wrapper";
import InformationAbout from "./InformationAbout";
import ListAbout from "./ListAbout";

const About = () => {
  return (
    <Section light>
      <Wrapper anchor="aboutme" last>
        <InformationAbout />
        <ListAbout />
      </Wrapper>
    </Section>
  );
};

export default About;
