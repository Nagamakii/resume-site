import React from 'react';
import { DiPython, DiTerminal, DiAptana } from 'react-icons/di';
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
          <ListTitle>Scripting</ListTitle>
          <ListParagraph>
            Leveraging <br />
            Python, Powershell, and JavaScript to build scripts and applications to make life more simple 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAptana size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automation</ListTitle>
          <ListParagraph>
            Hands on <br />
            experiece automating tasks with python, powershell, zapier, and more
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiTerminal size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Administration</ListTitle>
          <ListParagraph>
            First hand <br />
            experiece managing both Windows and Linux operating systems for end users
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
