"use server";

import { db } from "@/lib/db";
import { ReturnType, InputType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { DeleteFamily } from "./schema";
import { revalidatePath } from "next/cache";


const handler  = async (data: InputType): Promise<ReturnType> => {
  const { id } = data;
  let family;

  try {
    family = await db.family.delete({
      where: {
        id_familia: id
      }
    });
    
    //Revalidamos el cache de la pagina de admin
    revalidatePath('/admin303511')
  } catch (error) {
    return {
      error: "Error al eliminar la familia",
    };
  }

  revalidatePath('/admin303511')
  return { data: family };
}
export const deleteFamily = createSafeAction(DeleteFamily, handler);