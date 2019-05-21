import { styled } from '$ui/styles/styledComponents';
import { Informacion } from '$ui/views/_components/Informacion';

export { MotivosRehuseHeader };

const MotivosRehuseHeader = styled(Informacion.Header)`
  text-align: center;
  font-size: ${p => p.theme.font.size.large}px;
  font-weight: ${p => p.theme.font.weight.semibold};
`;
