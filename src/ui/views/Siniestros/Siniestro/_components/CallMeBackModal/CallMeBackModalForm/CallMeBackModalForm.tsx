import React, { useCallback, useMemo, useState } from 'react';

import { User } from '$core/domain/session';
import {
  canBePhoneNumber,
  isValidPhoneNumber,
} from '$core/domain/validations/phoneNumber';
import { t } from '$core/infraestructure/locale/t';
import {
  hasValue,
  obfuscatePhoneNumber,
} from '$core/infraestructure/utils/string';
import { Paragraph } from '$ui/components/Paragraph';
import {
  CallMeBackLayout,
} from '$ui/views/Siniestros/Siniestro/_components/CallMeBackLayout';
import { CallMeBackModalHtml } from '../CallMeBackModalHtml';
import {
  CallMeBackModalFormButton,
  CallMeBackModalFormCentered,
  CallMeBackModalFormInput,
} from './CallMeBackModalForm.styles';

export { CallMeBackModalForm };

interface Props {
  user: User;
  onStartCall(phone: string): void;
}

function CallMeBackModalForm({ user, onStartCall }: Props) {
  const [phone, setPhone] = useState<string>('');
  const titleKey = useMemo(createTitleKey, [user]);
  const obfuscatedMobile = useMemo(obfuscateMobile, [user]);
  const handlePhoneChanged = useCallback(onPhoneChanged, [setPhone]);
  const isInvalid = useMemo(createIsInvalid, [phone, user]);
  const handleLlamarClick = useCallback(onLlamarClick, [
    onStartCall,
    phone,
    user,
  ]);

  return (
    <CallMeBackLayout title={t(titleKey)}>
      <Paragraph>{t('siniestros.callMeBack.form.descripcion')}</Paragraph>
      <CallMeBackModalFormCentered>
        <CallMeBackModalFormInput
          type="text"
          placeholder={obfuscatedMobile}
          value={phone}
          onChange={handlePhoneChanged}
          isInvalid={isInvalid}
        />
        <CallMeBackModalFormButton
          disabled={isInvalid}
          onClick={handleLlamarClick}
        >
          {t('siniestros.callMeBack.form.llamar')}
        </CallMeBackModalFormButton>
        <div>
          <CallMeBackModalHtml
            html={t('siniestros.callMeBack.form.alternativa')}
          />
        </div>
      </CallMeBackModalFormCentered>
    </CallMeBackLayout>
  );

  function createTitleKey() {
    const tipo = user.mobile ? 'conTelefono' : 'sinTelefono';
    return `siniestros.callMeBack.form.titulo.${tipo}`;
  }

  function obfuscateMobile() {
    if (!user.mobile) {
      return undefined;
    }
    return obfuscatePhoneNumber(user.mobile);
  }

  function onPhoneChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (canBePhoneNumber(value)) {
      setPhone(value);
    }
  }

  function createIsInvalid() {
    if (phone) {
      return !isValidPhoneNumber(phone);
    }
    return !user.mobile;
  }

  function onLlamarClick() {
    const currentPhone = hasValue(phone) ? phone : user.mobile;
    return onStartCall(currentPhone);
  }
}
