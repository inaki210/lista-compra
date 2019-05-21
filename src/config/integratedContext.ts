export { integratedContext, configureIntegratedContext };

const integratedContext = {} as IntegratedContext;

function configureIntegratedContext(context: IntegratedContext) {
  Object.assign(integratedContext, context);
}
interface IntegratedContext {
  initialize: () => void;
  element: HTMLElement;
}
