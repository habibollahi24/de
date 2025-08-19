export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11); // فقط عدد، تا 11 رقم
  const parts = [
    digits.slice(0, 4),
    digits.slice(4, 7),
    digits.slice(7, 11),
  ].filter(Boolean);
  return parts.join(' ');
};
