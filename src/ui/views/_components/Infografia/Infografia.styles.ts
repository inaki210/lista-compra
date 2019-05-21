import { styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';
import { Informacion } from '$ui/views/_components/Informacion';

export { InfografiaProcesoContainer, InfografiaItemWrapper };

const InfografiaProcesoContainer = styled(Informacion.Body)`
  padding-bottom: ${p => p.theme.baseSpace.base}px;

  border-left: 3px solid ${p => p.theme.colors.magenta};

  /**
   * Se utiliza el media.all debido a que Informacion.Body define margenes en
   * dependiendo de mediaqueries
   */
  ${media.all`
    margin-top: 0;
    margin-bottom: 0;
  `}
`;

const InfografiaItemWrapper = styled.div`
  padding: ${p => p.theme.baseSpace.xsm}px ${p => p.theme.baseSpace.sm}px;
`;
