import bcrypt from 'bcrypt';
export const hashPassword = async (plainPassword: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashPassword;
};
