import { z } from 'zod';

export const loginObject = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const signupObject = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4),
});
