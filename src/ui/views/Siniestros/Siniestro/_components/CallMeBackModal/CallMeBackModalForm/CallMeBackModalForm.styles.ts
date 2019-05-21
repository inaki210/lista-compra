import { Button } from '$ui/components/forms/Button';
import { Input } from '$ui/components/forms/Input';
import { styled } from '$ui/styles/styledComponents';

export {
  CallMeBackModalFormCentered,
  CallMeBackModalFormInput,
  CallMeBackModalFormButton,
};

const CallMeBackModalFormCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CallMeBackModalFormInput = styled(Input)`
  width: 160px;
  margin-bottom: ${p => p.theme.baseSpace.sm}px;
`;

const CallMeBackModalFormButton = styled(Button)`
  margin-bottom: ${p => p.theme.baseSpace.sm}px;
`;
