import { layout, text } from ".";

export function phases(value: string) {
  return {
    margin: 0,
    table: {
      widths: ["20%", "10%", "10%", "20%", "40%"],
      body: [
        [
          text({
            text: value,
            fontSize: 10,
            border: [true, true, true, false],
          }),
          text({ text: "N°:", border: [true, true, true, false] }),
          text({ text: "DATA:", border: [true, true, true, false] }),
          text({ text: "LOCAL:", border: [true, true, true, false] }),
          text({
            text: "ATIVIDADES:",
            border: [true, true, true, false],
          }),
        ],
      ],
    },
    layout: layout(true),
  };
}
