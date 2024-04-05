import { z } from "zod";
import { Guest } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";
import { FetchGuestList } from "./schema";

export type InputType = z.infer<typeof FetchGuestList>;
export type ReturnType = ActionState<InputType, Guest[]>;
