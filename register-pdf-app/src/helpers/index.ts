export function formatBRDate(value: string): string {
  if (value.length === 8) {
    const day: string = value.substring(0, 2);
    const month: string = value.substring(2, 4);
    const year: string = value.substring(4);

    const finalString: string = `${day}/${month}/${year}`;

    return finalString;
  }
  return value;
}

export const formatPhone = (text: string) => {
  const cleaned = `${text}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return cleaned;
};
