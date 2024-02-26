import { Content } from "pdfmake/interfaces";
import { layout, text } from "./helpers";

export function personalAddress(): Content[] {
  return [
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ["50%", "10%", "10%", "30%"],
        body: [
          [
            text({ text: "address:", border: [true, true, true, false] }),
            text({ text: "N°:", border: [true, true, true, false] }),
            text({ text: "APTO:", border: [true, true, true, false] }),
            text({
              text: "FONE: (  ):",
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
        widths: ["33%", "14%", "20%", "33%"],
        body: [
          [
            { text: "district:", fontSize: 8 },
            { text: "CEP:", fontSize: 8 },
            { text: "city-ESTADO:", fontSize: 8 },
            { text: "parish:", fontSize: 8 },
          ],
        ],
      },
      layout: layout(true),
    },
  ];
}
