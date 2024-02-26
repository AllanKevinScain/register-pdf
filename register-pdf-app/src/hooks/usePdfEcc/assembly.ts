import { layout, photoColumns, text, title, usualName } from "./helpers";

export function assembly() {
  return [
    title("FICHA DE MONTAGEM DO ECC (Registro de Casais)"),
    {
      margin: 0,
      table: {
        widths: [200],
        body: [
          [
            {
              table: {
                widths: [90, 100, "100%"],
                heights: [70, 70, "*"],
                body: [
                  [
                    ...photoColumns(["FOTO", "FOTO"]),
                    [
                      {
                        table: {
                          widths: [347],
                          body: [[text({ text: "parish:" })]],
                        },
                      },
                      ...usualName({ pronoun: "ELE:" }),
                      ...usualName({ pronoun: "ELA:" }),
                      {
                        table: {
                          widths: [169, 169],
                          body: [
                            [
                              text({
                                text: "CASAMENTO RELIGIOSO:",
                                border: [true, false, true, true],
                              }),
                              text({
                                text: "QUAL A parish:",
                                border: [true, false, true, true],
                              }),
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                ],
              },
              layout: layout(false),
            },
          ],
        ],
      },
      layout: layout(true),
    },
  ];
}
