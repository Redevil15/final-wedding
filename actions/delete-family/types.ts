import { z } from 'zod';
import { Family } from '@prisma/client';
import { ActionState } from '@/lib/create-safe-action';
import { DeleteFamily } from './schema';

export type InputType = z.infer<typeof DeleteFamily>;
export type ReturnType = ActionState<InputType, Family>;