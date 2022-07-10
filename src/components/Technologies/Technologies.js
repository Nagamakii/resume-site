import React from 'react';
import { DiPython, DiTerminal, DiRasberryPi } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've commited myself to learning and understanding as many new technologies as I possibly can
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experiece <br />
            using python and powershell to automate tasks
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiTerminal size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>OS Administration</ListTitle>
          <ListParagraph>
            First hand <br />
            experiece with both Windows and Linux operating systems
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiRasberryPi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Single-Board Computing</ListTitle>
          <ListParagraph>
            Expanding <br />
            my knowledge into Raspberry pi and Arduino devices
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
