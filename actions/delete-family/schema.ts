import { z } from "zod";

export const DeleteFamily = z.object({
  id: z.string()
})