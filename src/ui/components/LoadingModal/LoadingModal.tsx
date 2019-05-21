import React from 'react';

import { Loading } from '$ui/components/Loading';
import { Modal } from '$ui/components/Modal';

export { LoadingModal };

function LoadingModal() {
  return (
    <Modal small>
      <Modal.Body>
        <Loading withoutDelay small />
      </Modal.Body>
    </Modal>
  );
}
