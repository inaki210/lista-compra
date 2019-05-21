import { Section } from '$ui/components/Section';
import { styled } from '$ui/styles/styledComponents';

export {
  DetalleSiniestroHeader,
  DetalleSiniestroTitle,
  DetalleSiniestroActions,
};

const DetalleSiniestroHeader = styled(Section.Header)`
  display: flex;
`;

const DetalleSiniestroTitle = styled.div`
  flex-grow: 1;
`;

const DetalleSiniestroActions = styled.div`
  flex-shrink: 0;

  font-size: ${p => p.theme.font.size.xxsmall}px;
`;
