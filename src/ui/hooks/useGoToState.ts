import { SyntheticEvent, useCallback } from 'react';

import { StateParams } from '$core/infraestructure/navigator';
import { navigator, StateName } from '$ui/navigator';

export { useGoToState };

function useGoToState(stateName: StateName, stateParams?: StateParams) {
  const goToState = useCallback(onGoToState, [stateName, stateParams]);

  return goToState;

  function onGoToState(event?: SyntheticEvent) {
    if (event) {
      event.stopPropagation();
    }
    navigator.goToState(stateName, stateParams);
  }
}
