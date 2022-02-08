import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='tech'>
      <SectionDivider />
        <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've been working on various technologies in the Data Science and Blockchain domains.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListItem>

      <ListItem>
          <DiFirebase size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListItem>

        <ListItem>
          <DiZend size="3rem" />
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListItem>  
        
      </List>
    </Section>
  </div>
);

export default Technologies;
