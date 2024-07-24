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

export const postObject = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});
