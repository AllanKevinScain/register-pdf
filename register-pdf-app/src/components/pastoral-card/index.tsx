import { Link } from "react-router-dom";
import { PastoralCardInterface } from "./pastoral-card.interface";

export function PastoralCard(props: PastoralCardInterface) {
  const { pastoralName = "Curso de Liderança Juvenil", targetingLink = "/" } =
    props;
  return (
    <Link to={targetingLink} target="_self" className="flex">
      <div className="flex w-full items-center justify-center rounded-md bg-logo-1 text-slate-900 p-5 space-y-3 hover:ring-2 hover:ring-primary-600">
        <span className="text-xl font-medium">{pastoralName}</span>
      </div>
    </Link>
  );
}
