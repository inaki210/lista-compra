import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Modal, SizeProps } from './Modal';

storiesOf('Modal', module).add('default', () => (
  <>
    {boolean('Mostrar modal', true) && (
      <Modal onClose={onClose('modal')} {...modalSize()}>
        <Modal.Body>
          <p>contenido</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum
            dolor, pretium ut ornare sed, commodo eget nibh. Etiam fringilla
            mollis enim, quis interdum nibh. Cras feugiat vel ipsum eu cursus.
            Nam viverra massa justo. Praesent posuere pharetra ex, at sagittis
            nisl vehicula eget. Nunc dignissim id turpis id tincidunt. Morbi
            eget mauris egestas, venenatis erat a, vestibulum purus.
            Pellentesque quis sapien sed turpis suscipit congue. Vivamus lacinia
            in velit ac pharetra. Sed vulputate pulvinar magna vel lacinia.
          </p>
          <p>
            Quisque vitae sapien cursus, placerat ligula sollicitudin, molestie
            felis. Fusce vitae consequat neque. Aliquam molestie tellus tortor,
            et sagittis neque feugiat sit amet. Quisque vehicula lacus eros, non
            lacinia risus rhoncus sed. Proin pretium semper dui, eget luctus
            enim semper a. Fusce eget augue pellentesque, malesuada sem id,
            porttitor elit. Nunc elementum interdum dui, sit amet imperdiet est
            mattis id. Morbi eget fringilla urna. Suspendisse potenti. Aenean
            non hendrerit enim. Suspendisse gravida pellentesque nisl.
          </p>
        </Modal.Body>
        {boolean('Mostrar modal anidada', false) && (
          <Modal onClose={onClose('modal anidada')}>
            <Modal.Body>
              <p>contenido anidado</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at mauris sed tortor tincidunt vestibulum. Fusce euismod ligula
                sed risus porttitor, non vehicula nibh vulputate. Nullam porta
                magna ornare augue volutpat, et pellentesque quam dictum.
                Vivamus scelerisque nec libero nec ullamcorper. Pellentesque non
                eros non tortor pharetra auctor quis at dolor. Nulla ante diam,
                dignissim ut libero sit amet, convallis commodo ligula. Integer
                tempor posuere feugiat. Pellentesque maximus nisi ac viverra
                egestas. Ut aliquet tempus diam dignissim sollicitudin.
                Pellentesque consectetur eros vel tincidunt tempus.
              </p>
            </Modal.Body>
          </Modal>
        )}
      </Modal>
    )}
  </>
));

function onClose(name: string) {
  return action(`${name} onClose`);
}

function modalSize(): SizeProps {
  const size = select(
    'Tamaño',
    ['por defecto', 'grande', 'pequeño'],
    'por defecto',
  );
  switch (size) {
    case 'grande':
      return { large: true };
    case 'pequeño':
      return { small: true };
    default:
      return {};
  }
}
