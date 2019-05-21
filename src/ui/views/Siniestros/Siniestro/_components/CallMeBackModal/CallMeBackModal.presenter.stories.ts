import { user } from '$ui/.storybook/samples/user';
import { CallMeBackModalPresenter } from './CallMeBackModal.presenter';

let success = true;

CallMeBackModalPresenter.create = view => {
  view.setUser(user);

  return {
    onStartCall,
  };

  function onStartCall() {
    setTimeout(setStartCallResult, 1000);
  }

  function setStartCallResult() {
    if (success) {
      view.setStartCallSuccess();
    } else {
      view.setStartCallError();
    }
    success = !success;
  }
};
