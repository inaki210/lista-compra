import React, { ComponentProps, ComponentType } from 'react';

export { reactLazy };

function reactLazy<Module>(
  factory: () => Promise<Module>,
  // tslint:disable-next-line:no-any
  component: (module: Module) => ComponentType<any>,
) {
  return React.lazy(async () => {
    const module = await factory();
    return { default: component(module) };
  });
}

// tslint:disable-next-line: no-any
export type ReactComponent<T extends ComponentType<any>> = ComponentType<
  ComponentProps<T>
>;
