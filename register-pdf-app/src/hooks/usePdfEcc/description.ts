import { layout, text } from "./helpers";

export function description() {
  return [
    {
      margin: 0,
      table: {
        widths: ["100%"],
        heights: [40],
        body: [
          [
            text({
              text: "ENGAJAMENTO parishL",
              border: [true, true, true, false],
            }),
          ],
        ],
      },
      layout: layout(true),
    },
    {
      margin: 0,
      table: {
        widths: ["100%"],
        heights: [70],
        body: [[text({ text: "habilities" })]],
      },
    },
  ];
}
