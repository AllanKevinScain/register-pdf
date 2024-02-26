import { ComponentProps } from "react";

type InputInterface = ComponentProps<"input">;
export interface TextFieldInterface extends InputInterface {
  label?: string;
  isinvalid: boolean;
  errormessage?: string;
}

type TextareaInterface = ComponentProps<"textarea">;
export interface TextAreaFieldInterface extends TextareaInterface {
  label?: string;
  isinvalid: boolean;
  errormessage?: string;
}
