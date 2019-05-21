import React, { useCallback } from 'react';

import { t } from '$core/infraestructure/locale/t';
import { Html, ReplaceProps } from '$ui/components/Html';
import { ModalProps } from '$ui/components/Modal';
import {
  TimelineInfoContent,
  TimelineInfoImage,
  TimelineInfoModalLink,
  TimelineInfoWrapper,
} from './TimelineInfo.styles';

export { TimelineInfo };

interface Props {
  className?: string;
  messageKey: string;
  modal: React.ComponentType<ModalProps>;
}

function TimelineInfo({ className, messageKey, modal }: Props) {
  const handleReplace = useCallback(onReplace, [modal]);

  return (
    <TimelineInfoWrapper className={className}>
      <TimelineInfoImage name="info.svg" />
      <TimelineInfoContent>
        <Html html={t(messageKey)} onReplace={handleReplace} />
      </TimelineInfoContent>
    </TimelineInfoWrapper>
  );

  function onReplace({ tag, children }: ReplaceProps) {
    switch (tag) {
      case 'a':
        return (
          <TimelineInfoModalLink modal={modal}>
            {children()}
          </TimelineInfoModalLink>
        );
      default:
        return false;
    }
  }
}
