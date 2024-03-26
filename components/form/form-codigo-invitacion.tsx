"use client";

import { useEffect, useState } from "react";
import { CardCodigo } from "../cards/card-codigo";
import { CardListaInvitados } from "../cards/card-lista-invitados";
import { CardFinalConfirmation } from "../cards/final-confirmation";
import Modal from '@mui/material/Modal';
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export const FormCodigoInvitacion = () => {
  const [invitados, setInvitados] = useState([]);
  const [invitadosAdultos, setInvitadosAdultos] = useState([]);
  const [invitadosNinos, setInvitadosNinos] = useState([]);
  const [finalConfirmation, setFinalConfirmation] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  const handleInvitados = (data: any) => {
    console.log("Hola jaja, no deberías estar viendo esto -_-");
    setInvitados(data.invitados)
  };

  useEffect(() => {
    const adultos = invitados.filter((invitado: any) => invitado.es_adulto);
    const ninos = invitados.filter((invitado: any) => !invitado.es_adulto);
    setInvitadosAdultos(adultos);
    setInvitadosNinos(ninos);
  }, [invitados]);

  const showModal = () => {
    setShowModalConfirm(true)
    setInvitados([])
    setFinalConfirmation(false)
  }

  const handleCloseModal = () => {
    setShowModalConfirm(false);
  };
  return (
    <div className="flex flex-col justify-center space-y-2 my-4">
      {!finalConfirmation && invitados.length === 0 ? (
        <CardCodigo
          onInvitados={handleInvitados}
        />
      ) : !finalConfirmation && invitados.length > 0 ? (
        <CardListaInvitados
          adultos={invitadosAdultos}
          ninos={invitadosNinos}
          onBack={() => setInvitados([])}
          onContinue={() => setFinalConfirmation(true)}
        />
      ) : finalConfirmation && !showModalConfirm && (
        <CardFinalConfirmation
          onBack={() => setFinalConfirmation(false)}
          adultos={invitadosAdultos}
          ninos={invitadosNinos}
          onSucces={showModal}
        />
      )}
      {showModalConfirm && (
        <div className="h-full mt-30 w-full flex items-center justify-center bg-green-200">
          <Modal
            open={showModalConfirm}
            onClose={handleCloseModal}
            className="flex items-center justify-center p-6"
          >
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg">
              <CheckCircle className='w-20 h-20' color='#b69f6b' />
              <p className='text-xl my-4'>Se ha confirmado su asistencia con éxito!</p>
              <Button variant="outline" onClick={() => handleCloseModal()}>OK</Button>
            </div>
          </Modal>
        </div>
      )
      }
    </div>
  )
}