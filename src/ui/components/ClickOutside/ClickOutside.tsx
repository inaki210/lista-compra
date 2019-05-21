import * as React from 'react';
import onClickOutsideHOC, {
  InjectedOnClickOutProps,
} from 'react-onclickoutside';

export { ClickOutside };

interface Props {
  onClickOutside: React.MouseEventHandler<any>;
  isExcluded?: (element: HTMLElement) => boolean;
}

class OutsideClickRaw extends React.Component<Props & InjectedOnClickOutProps> {
  render() {
    return this.props.children;
  }

  handleClickOutside(event: React.MouseEvent<any>) {
    const { onClickOutside, isExcluded } = this.props;
    if (isExcluded && isExcluded(event.target as HTMLElement)) {
      return;
    }
    onClickOutside(event);
  }
}

const ClickOutside = onClickOutsideHOC(OutsideClickRaw);
