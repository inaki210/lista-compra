import React from 'react';

import {
  CallMeBackLayout,
} from '$ui/views/Siniestros/Siniestro/_components/CallMeBackLayout';
import { CallMeBackModalHtml } from './CallMeBackModalHtml';

export { CallMeBackModalResult };

interface Props {
  title: string;
  description: string;
}

function CallMeBackModalResult({ title, description }: Props) {
  return (
    <CallMeBackLayout title={title}>
      <div>
        <CallMeBackModalHtml html={description} />
      </div>
    </CallMeBackLayout>
  );
}
