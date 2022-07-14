import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Evan Quah, <br />
          Cybersecurity Specialist
        </SectionTitle>
        <SectionText>
        CompTIA Security+ certified. Working to create a more positive and environmentally friendly future through innovative technology and cybersecurity.
        </SectionText>
          <Button onClick={() => window.location = 'https://www.linkedin.com/in/evan-quah/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;