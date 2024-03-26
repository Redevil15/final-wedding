import { z } from "zod";
import { ActionState } from "@/lib/create-safe-action";
import { ConfirmAssistence } from "./schema";

export type ConfirmAssistenceInput = z.infer<typeof ConfirmAssistence>;

export type ConfirmAssistenceReturnType = ActionState<ConfirmAssistenceInput, { success: boolean; message?: string}>;