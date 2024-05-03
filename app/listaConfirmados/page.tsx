"use server";

import { db } from "@/lib/db";
import { TablaConfirmados } from "./_components/tabla-confirmados";


const TablaConfirmadosPage = async () => {

  const families = await db.family.findMany({
    include: {
      invitados: true
    },
    orderBy: {
      nombre_familia: 'asc'
    }
  })

  const invitadosConfirmados = families.map(family => family.invitados.filter(invitado => invitado.confirmed)).flat();

  return (
    <div className="flex items-center justify-center pt-2">
      <TablaConfirmados
        confirmados={invitadosConfirmados}
      />
    </div>
  )
};

export default TablaConfirmadosPage;