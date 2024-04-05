"use server";

import { db } from "@/lib/db";
import { ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { FetchGuestList } from "./schema";


const handler = async (): Promise<ReturnType> => {
  let families: any[];
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
