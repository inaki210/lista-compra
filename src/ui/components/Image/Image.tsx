import React from 'react';

import { getImage } from '$ui/images';

export { Image };

interface Props {
  className?: string;
  name: string;
}

function Image({ className, name }: Props) {
  const src = getImage(name);
  return <>{src && <img className={className} src={src} />}</>;
}
