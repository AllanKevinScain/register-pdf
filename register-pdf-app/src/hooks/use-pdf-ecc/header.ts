import { title } from "./helpers";

export function header() {
  return [
    title("ENCONTRO DE CASAIS COM CRISTO - ECC"),
    {
      margin: 0,
      table: {
        widths: ["50%", "50%"],
        body: [["(ARQUI) DIOCESE:", "city:"]],
      },
    },
  ];
}
