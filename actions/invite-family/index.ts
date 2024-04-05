"use server";

import { db } from "@/lib/db";
import { InputType, ReturnType } from "./types";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { InviteFamily } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
 
  const { nombre_familia, invitados } = data;
  

  let family;

  try {
    family = await db.family.create({
      data: {
        nombre_familia,
        invitados: {
          createMany: {
            data: invitados.map((invitado) => ({
              nombre_invitado: invitado.nombre,
              es_adulto: invitado.adulto ? true : false,
            }))
          }
        }
      },
    });
  } catch (error) {
    return {
      error: "Error al invitar a la familia",
    };
  }

  revalidatePath('https://fabybrandon-wedding.vercel.app/admin303511')
  return { data: family };
};

export const inviteFamily = createSafeAction(InviteFamily, handler);