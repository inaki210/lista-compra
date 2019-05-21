import React from 'react';

import { StateParams } from '$core/infraestructure/navigator';
import { MatchMedia } from '$ui/components/MatchMedia';
import { ModalProps } from '$ui/components/Modal';
import { useGoToState } from '$ui/hooks/useGoToState';
import { StateName } from '$ui/navigator';
import { ActionProps } from './Action.models';
import { ModalAction } from './ModalAction';

export { ModalOrStateAction };

interface Props extends ActionProps, ModalOrStateProps {}

export interface ModalOrStateProps {
  modal: React.ComponentType<ModalProps>;
  stateName: StateName;
  stateParams?: StateParams;
}

function ModalOrStateAction({
  children,
  modal,
  stateName,
  stateParams,
}: Props) {
  const goToState = useGoToState(stateName, stateParams);

  return (
    <>
      <MatchMedia onlyMobile>{children(goToState)}</MatchMedia>
      <MatchMedia tabletAndDesktop>
        <ModalAction modal={modal}>{children}</ModalAction>
      </MatchMedia>
    </>
  );
}
