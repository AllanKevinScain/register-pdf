import { Content } from "pdfmake/interfaces";

interface TextInterface {
  text: string;
  fontSize?: number;
  color?: string;
  border?: boolean[];
}
export function text(props: TextInterface) {
  const { text, border, fontSize = 8, color } = props;
  return {
    text,
    fontSize,
    color,
    border,
  };
}

export function layout(defaultBorder: boolean) {
  return {
    defaultBorder,
  };
}

export function title(title: string): Content {
  return {
    table: {
      widths: ["100%"],
      body: [[title]],
    },
    alignment: "center",
    layout: "noBorders",
  };
}
