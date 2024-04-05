"use server";

import { db } from "@/lib/db";
import { ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { FetchGuestList } from "./schema";
import { Guest } from "@prisma/client";

const handler = async (): Promise<ReturnType> => {
  let guests: Guest[];
  console.log('jaja no se que show')
  try {
    guests = await db.guest.findMany();
  } catch (error) {
    return {
      error: "Error al obtener la lista de invitados",
    };
  }

  return { data: guests };
};

export const fetchGuestList = createSafeAction(FetchGuestList, handler)
