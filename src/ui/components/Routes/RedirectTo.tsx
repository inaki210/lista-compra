import { StateParams } from '$core/infraestructure/navigator';
import { navigator, StateName } from '$ui/navigator';

export { RedirectTo };

interface Props {
  state: StateName;
  params?: StateParams;
}

function RedirectTo({ state, params }: Props) {
  navigator.goToState(state, params);
  return null;
}
