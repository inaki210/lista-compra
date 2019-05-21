import { createAppError } from '../createAppError';
import { i18next } from './i18next';

export { loadNamespace };

function loadNamespace(namespace: string) {
  return new Promise<void>((resolve, reject) => {
    i18next.loadNamespaces(namespace, error => {
      if (error) {
        const reason = createAppError('locale', 'loadNamespace', error);
        reject(reason);
      } else {
        resolve();
      }
    });
  });
}
