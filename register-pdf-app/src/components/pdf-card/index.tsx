import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PdfCardInterface } from "./pdfCart.interface";
import { X } from "lucide-react";
import { PdfForm } from "..";
import { useFormik } from "formik";
import { PdfEccSchemaType } from "../../types/yup";

export function PdfCard(props: PdfCardInterface) {
  const { hisName, herName, createDate } = props;

  const formikValues = useFormik<PdfEccSchemaType>({
    onSubmit: () => {},
    initialValues: props,
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex rounded-md w-full justify-between p-3 outline-none bg-logo-1 text-slate-900 text-sm font-medium hover:ring-2 hover:ring-primary-600">
        <p>{`Casal: ${hisName} e ${herName}   |   Data: ${format(
          createDate!,
          "dd/MM/yyyy"
        )}`}</p>
        <span>
          {formatDistanceToNow(createDate!, { locale: ptBR, addSuffix: true })}
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed flex flex-col w-full max-w-[640px] bg-slate-700 outline-none overflow-hidden md:left-1/2 md:top-1/2 md:inset-auto md:rounded-md md:-translate-x-1/2 md:-translate-y-1/2 md:h-[60vh]">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <PdfForm {...formikValues} allDisabled={true} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
