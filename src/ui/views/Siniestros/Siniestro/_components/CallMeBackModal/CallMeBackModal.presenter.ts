import { startCall } from '$core/domain/callMeBack';
import { dispatch } from '$core/domain/dispatch';
import { currentUser, User } from '$core/domain/session';

export { CallMeBackModalPresenter };

interface View {
  setUser(user: User): void;
  setStartCallSuccess(): void;
  setStartCallError(): void;
}

const CallMeBackModalPresenter = {
  create,
};

function create(view: View) {
  const user = currentUser();
  view.setUser(user);

  return { onStartCall };

  function onStartCall(operatorCode: string, phone: string) {
    dispatch(async () => {
      const success = await startCall(operatorCode, phone);
      if (success) {
        view.setStartCallSuccess();
      } else {
        view.setStartCallError();
      }
    });
  }
}
