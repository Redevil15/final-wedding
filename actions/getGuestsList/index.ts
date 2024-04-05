"use server";

import { db } from "@/lib/db";
import { ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { FetchGuestList } from "./schema";
import { Guest } from "@prisma/client";

const handler = async (): Promise<ReturnType> => {
  let families: any[];
  console.log('jaja no se que show')
  try {
    families = await db.family.findMany({
      include: {
        invitados: true
      },
      orderBy: {
        nombre_familia: 'asc'
      }
    });
  } catch (error) {
    return {
      error: "Error al obtener la lista de invitados",
    };
  }

  return { data: families };
};

export const fetchGuestList = createSafeAction(FetchGuestList, handler)
