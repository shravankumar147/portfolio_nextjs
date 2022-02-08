import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br /> 
          My Personal portfolio

        </SectionTitle>
        <SectionText>
          Data Science - Blockchain - Web3.0
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>
          Lear More
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;