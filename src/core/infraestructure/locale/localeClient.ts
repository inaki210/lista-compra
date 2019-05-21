import { loadNamespace } from './loadNamespace';
import { createNamespacedT } from './t';

export { get };

async function get<Result>(
  namespace: string,
  createResult: (t: ReturnType<typeof createNamespacedT>) => Result,
) {
  await loadNamespace(namespace);
  const t = createNamespacedT(namespace);
  return createResult(t);
}
