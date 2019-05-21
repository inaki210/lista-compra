import React, { useCallback, useMemo, useState } from 'react';

import { User } from '$core/domain/session';
import { t } from '$core/infraestructure/locale/t';
import { Loading } from '$ui/components/Loading';
import { Modal, ModalProps } from '$ui/components/Modal';
import { usePresenter } from '$ui/hooks/usePresenter';
import { CallMeBackModalPresenter } from './CallMeBackModal.presenter';
import { CallMeBackModalForm } from './CallMeBackModalForm';
import { CallMeBackModalResult } from './CallMeBackModalResult';

export { CallMeBackModal };

interface Props extends ModalProps {
  operatorCode: string;
}

function CallMeBackModal({ operatorCode, onClose }: Props) {
  const [user, setUser] = useState({} as User);
  const [showForm, setShowForm] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const view = useMemo(createView, [
    setShowLoading,
    setShowSuccess,
    setShowError,
  ]);
  const presenter = usePresenter(CallMeBackModalPresenter.create, view);
  const handleStartCall = useCallback(onStartCall, [
    setShowForm,
    setShowLoading,
    presenter,
    operatorCode,
  ]);

  return (
    <Modal onClose={showLoading ? undefined : onClose}>
      <Modal.Body>
        {showForm && (
          <CallMeBackModalForm user={user} onStartCall={handleStartCall} />
        )}
        {showLoading && <Loading withoutDelay small />}
        {showSuccess && (
          <CallMeBackModalResult
            title={t('siniestros.callMeBack.solicitudRealizada.titulo')}
            description={t(
              'siniestros.callMeBack.solicitudRealizada.descripcion',
            )}
          />
        )}
        {showError && (
          <CallMeBackModalResult
            title={t('siniestros.callMeBack.solicitudErronea.titulo')}
            description={t(
              'siniestros.callMeBack.solicitudErronea.descripcion',
            )}
          />
        )}
      </Modal.Body>
    </Modal>
  );

  function createView() {
    return {
      setUser,
      setStartCallSuccess: () => {
        setShowLoading(false);
        setShowSuccess(true);
      },
      setStartCallError: () => {
        setShowLoading(false);
        setShowError(true);
      },
    };
  }

  function onStartCall(phone: string) {
    setShowForm(false);
    setShowLoading(true);
    presenter.onStartCall(operatorCode, phone);
  }
}
