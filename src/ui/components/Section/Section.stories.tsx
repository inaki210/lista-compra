import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Section } from './Section';

storiesOf('Section', module)
  .add('default', () => <Section>contenido</Section>)
  .add('with Header', () => (
    <Section>
      <Section.Header>Título de la sección</Section.Header>
      contenido
    </Section>
  ));
