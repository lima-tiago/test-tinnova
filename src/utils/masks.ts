// 00/00/0000
export const cpfMask = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 11);
  return value
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

// (00) 00000-0000
export const maskPhone = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.slice(0, 11);
  if (value.length <= 10) {
    return value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};
