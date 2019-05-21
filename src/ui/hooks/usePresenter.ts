import { useRef } from 'react';

export { usePresenter };

function usePresenter<Presenter, View>(
  createPresenter: (view: View) => Presenter,
  view: View,
) {
  const viewRef = useRef({} as View);
  const presenterRef = useRef<Presenter>();
  Object.assign(viewRef.current, view);
  if (!presenterRef.current) {
    presenterRef.current = createPresenter(viewRef.current);
  }
  return presenterRef.current;
}
