import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { phases, title } from "./helpers";
import { header } from "./header";
import { assembly } from "./assembly";
import { proAddress } from "./pro-address";
import { personalAddress } from "./personal-address";
import { description } from "./description";
import { activitiesReport } from "./activities-report";
import { terms } from "./terms";

export function usePdfEcc() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  function createPdf() {
    const docDefiitions: TDocumentDefinitions = {
      pageSize: "A4",
      pageMargins: [10, 10, 10, 10],
      header: [],
      content: [
        /* Cabeçalho */
        ...header(),
        /* Montagem */
        ...assembly(),
        /* address Pessoal */
        ...personalAddress(),
        /* address Profissional */
        ...proAddress(),
        /* Etapas */
        phases("ECC - 1ª ETAPA:"),
        phases("ECC - 2ª ETAPA:"),
        phases("ECC - 3ª ETAPA:"),
        /* Descrição do casal */
        ...description(),
        /* Relatório de atividades */
        title("RELATÓRIO DE ATIVIDADES"),
        ...activitiesReport(),
        /* Termos */
        ...terms(),
      ],
      footer: [],
    };

    pdfMake.createPdf(docDefiitions).download();
  }

  return {
    createPdf,
  };
}
