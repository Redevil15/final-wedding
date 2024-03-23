"use server";
import { ConfirmAssistence } from "./schema";
import { ConfirmAssistenceInput, ConfirmAssistenceReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";

const handler = async (
  data: ConfirmAssistenceInput
): Promise<ConfirmAssistenceReturnType> => {
  try {

    for (const { id_invitado, confirmed } of data) {
      await db.guest.update({
        where: {
          id_invitado
        },
        data: {
          confirmed
        }
      });
    }

    return { data: { success: true } };
  } catch (error) {
    console.log("Error al confirmar asistencia: ", error);
    return { error: "Error al confirmar asistencia." };
  }
}

export const confirmAssitence = createSafeAction(ConfirmAssistence, handler);