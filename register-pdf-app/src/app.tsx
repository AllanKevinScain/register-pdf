import { PastoralCard } from "./components";
import { PastoralType } from "./components/pastoral-card/pastoral-card.interface";
import { usePastoral } from "./hooks";
import { useCallback, useEffect, useState } from "react";

export function App() {
  const { getPastorals } = usePastoral();
  const [pastorals, setPastorals] = useState<PastoralType[]>([]);

  const pushPastorals = useCallback(async () => {
    const req = await getPastorals();

    setPastorals(req);
  }, [getPastorals]);

  useEffect(() => {
    pushPastorals();
  }, [pushPastorals]);

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 md:px-0">
      <div className="h-px bg-primary-700" />

      <div className="grid grid-cols-1 auto-rows-[250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pastorals.map((i) => (
          <PastoralCard.current
            key={i.id}
            targetingLink={i.name.toLowerCase()}
            {...i}
          />
        ))}
        {/* <PastoralCard.new /> */}
      </div>
    </div>
  );
}
