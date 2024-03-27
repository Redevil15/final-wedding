
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAction } from "@/hooks/use-action";
import { confirmAssitence } from "@/actions/confirm-assitence";
import { toast } from "sonner";


interface Invitado {
  nombre_invitado: string;
  id_invitado: string;
  confirmed: boolean;
}

interface CardFinalConfirmationProps {
  adultos: Invitado[];
  ninos: Invitado[];
  onBack: () => void;
  onSucces: () => void;
};

export const CardFinalConfirmation = ({
  adultos,
  ninos,
  onBack,
  onSucces
}: CardFinalConfirmationProps) => {
  const [invitados, setInvitados] = useState<Invitado[]>([...adultos, ...ninos])
  const [changesMade, setChangesMade] = useState<boolean>(false);

  const handleCheckboxChange = (id: string) => {
    setInvitados(prevInvitados =>
      prevInvitados.map(invitado =>
        invitado.id_invitado === id
          ? { ...invitado, confirmed: !invitado.confirmed }
          : invitado
      )
    )
    setChangesMade(true);
  }

  useEffect(() => {
  }, [invitados]);

  const { execute, fieldErrors } = useAction(
    confirmAssitence, {
    onSuccess: (data) => {
      // Open dialog with success message
      onSucces()
    },
    onError: (error) => {
      toast.error('Error al confirmar tu asistencia')
    }
  }
  )

  const handleSubmitConfirmation = () => {
    const confirmedInvitados = invitados.filter(invitado => invitado.confirmed);

    if (confirmedInvitados.length > 0) {
      const data = confirmedInvitados.map(invitado => ({
        id_invitado: invitado.id_invitado,
        confirmed: true
      }));
      execute(data);
    } else {
      setChangesMade(false);
      toast.error('Debes confirmar al menos un invitado para continuar')
    }

  }

  return (
    <Card
      className="bg-[#666460] max-w-[280px] md:max-w-[450px] h-[650px] overflow-y-auto"
    >
      <CardHeader
        className="mb-10"
      >
        <CardTitle
          className="text-[#b69f6b] uppercase text-xl tracking-widest text-center my-1"
        >
          Confirmación de Invitados
        </CardTitle>
        <CardDescription
          className="text-white text-center uppercase text-xs"
        >
          Selecciona la casilla a lado del nombre de aquellos invitados que desees confirmar. Los invitados con casillas sin seleccionar se cancelarán en automático.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div>
            <h1 className="text-[#b69f6b] -mt-6 mb-1 tracking-wide">
              Adultos
            </h1>
            <div className="flex flex-col gap-y-4">
              {adultos.map((invitado, index) => (
                <div key={index} className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    //checked={invitado.confirmed}
                    onChange={() => {
                      handleCheckboxChange(invitado.id_invitado)
                    }}
                  />
                  <label className="text-white text-sm">{invitado.nombre_invitado}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[#b69f6b] mt-4 mb-1 tracking-wide">
              Niños
            </h1>
            <div className="flex flex-col gap-y-4">
              {ninos.map((invitado, index) => (
                <div key={index} className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    //checked={invitado.confirmed}
                    onChange={() => {
                      handleCheckboxChange(invitado.id_invitado)
                    }}
                  />
                  <label className="text-white text-sm">{invitado.nombre_invitado}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter
        className="my-12 flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center"
      >
        <Button
          variant="outline"
          className="w-full md:w-auto bg-[#b69f6b] text-white tracking-wider hover:bg-[#b69f6b] hover:text-[#666460] transition-colors duration-300 ease-in-out"
          onClick={onBack}
        >
          Regresar
        </Button>
        <Button
          className="w-full md:w-auto bg-[#b69f6b] text-white tracking-wider hover:bg-[#b69f6b] hover:text-[#666460] transition-colors duration-300 ease-in-out"
          onClick={handleSubmitConfirmation}
          disabled={!changesMade}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  )
}