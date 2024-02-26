import { layout, text, title } from "./helpers";
import { Content } from "pdfmake/interfaces";

export function proAddress(): Content[] {
  return [
    title("address PROFISSIONAL"),
    {
      margin: 0,
      table: {
        widths: ["60%", "30%", "10%"],
        body: [
          [
            text({ text: "ELE:", border: [true, true, true, false] }),
            text({ text: "FONE: (  )", border: [true, true, true, false] }),
            text({
              text: "DATA-CASAM:",
              border: [true, true, true, false],
            }),
          ],
        ],
      },
      layout: layout(true),
    },
    {
      margin: [0, 0, 0, 5],
      table: {
        widths: ["60%", "30%", "10%"],
        body: [
          [
            text({ text: "ELA:" }),
            text({ text: "FONE: (  )" }),
            text({ text: "N°FILHOS:" }),
          ],
        ],
      },
      layout: layout(true),
    },
  ];
}
