import crypto from 'crypto';
export const hashPassword = (plainPassword: string) => {
  const ans = crypto
    .createHmac('sha256', 'secret')
    .update(plainPassword)
    .digest('hex');
  return ans;
};
