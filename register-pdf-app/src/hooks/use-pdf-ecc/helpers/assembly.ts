import { text } from ".";

interface UsualNameInterface {
  pronoun: string;
}

export function photoColumns(values: string[]) {
  return values.map((text) => {
    return {
      text,
      border: [false, false, true, false],
      alignment: "center",
    };
  });
}

export function usualName(props: UsualNameInterface) {
  const { pronoun } = props;

  return [
    {
      table: {
        widths: [230, 108],
        body: [
          [
            text({ text: pronoun, border: [true, false, true, false] }),
            text({
              text: "NOME USUAL:",
              fontSize: 7,
              border: [true, false, true, false],
            }),
          ],
        ],
      },
    },
    {
      table: {
        widths: [169, 169],
        body: [
          [
            text({ text: "NASCIMENTO:", border: [true, true, true, true] }),
            [
              text({
                text: "PROFISSÃO:",
                fontSize: 7,
              }),
              text({
                text: "RELIGIAO:",
                fontSize: 7,
                border: [true, true, true, false],
              }),
            ],
          ],
        ],
      },
    },
  ];
}
