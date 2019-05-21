import React from 'react';

import { Link } from '$ui/components/Link';
import { ModalProps } from '$ui/components/Modal';

export { ModalLink };

interface Props {
  className?: string;
  modal: React.ComponentType<ModalProps>;
  children: React.ReactNode;
}

interface State {
  showModal: boolean;
}

class ModalLink extends React.Component<Props, State> {
  state: State = {
    showModal: false,
  };

  render() {
    const { className, modal: Modal, children } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <Link className={className} onClick={this.showModal}>
          {children}
        </Link>
        {showModal && <Modal onClose={this.hideModal} />}
      </>
    );
  }

  private showModal = () => {
    this.setState({ showModal: true });
  };

  private hideModal = () => {
    this.setState({ showModal: false });
  };
}
