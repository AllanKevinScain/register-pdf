import { twMerge } from "tailwind-merge";
import { RowContainerInterface } from "./row-container.interface";

export function RowContainer(props: RowContainerInterface) {
  const { children, className } = props;

  return (
    <div {...props} className={twMerge("flex gap-4 w-full", className)}>
      {children}
    </div>
  );
}
