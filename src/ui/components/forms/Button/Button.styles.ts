import { styled } from '$ui/styles/styledComponents';
import { formControl } from '../form.styles';

export { Button };

const Button = styled.button`
  ${formControl}

  color: ${p => p.theme.colors.berenjena};
  font-size: ${p => p.theme.font.size.xsmall}px;
  font-weight: ${p => p.theme.font.weight.semibold};

  border: 1px solid ${p => p.theme.colors.beigeOscuro3};
  background-color: ${p => p.theme.colors.beige};

  :disabled {
    color: ${p => p.theme.colors.background};

    border-color: ${p => p.theme.colors.grisClaro};
    background-color: ${p => p.theme.colors.grisClaro};
  }
`;
