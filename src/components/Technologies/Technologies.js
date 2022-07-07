import React from 'react';
import { DiTerminal, DiPython, DiRasberryPi } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am a big kid I swear!
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Scripting</ListTitle>
          <ListParagraph>
            Proficiency with <br />
            Python, Powershell, and other automated workflow software
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>OS Admininstration</ListTitle>
          <ListParagraph>
            Experience with <br />
            both windows and linux <br />
            in a buisness enviornment
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRasberryPi size="3rem" />
        <ListContainer>
          <ListTitle>Single Board Computing</ListTitle>
          <ListParagraph>
            Extensive work <br />
            with RasberryPis, Arduinos, and Sparkfun devices
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
