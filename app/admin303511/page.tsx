"use server";
import { db } from "@/lib/db";

import { FamilyList } from "./_components/family-list";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AdminPage = async () => {
  const families = await db.family.findMany({
    include: {
      invitados: true
    },
    orderBy: {
      nombre_familia: 'asc'
    }
  })



  return (
    <div className="">
      <div className="flex items-center justify-center pt-4">
        F & B Admin Page
      </div>
      <div className="flex items-center justify-center pt-2">
        Lista de invitados
      </div>
      <div
        className="flex items-center justify-center py-2"
      >
        <Button
          variant="outline"
        >
          <Link
            href="/listaConfirmados"
          >
            Ir a la lista de confirmados
          </Link>
        </Button>
      </div>
      <div className="flex flex-col space-y-2">
        <FamilyList
          data={families}
        />
      </div>
    </div>
  )
}

export default AdminPage;