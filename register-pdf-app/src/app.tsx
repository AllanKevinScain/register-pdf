import { PastoralCard } from "./components";

const pastorais = [
  {
    pastoralName: "ECC",
    targetingLink: "/ecc",
  },
];

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 md:px-0">
      <div className="h-px bg-primary-700" />

      <div className="grid grid-cols-1 auto-rows-[250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pastorais.map((i) => (
          <PastoralCard key={i.pastoralName} {...i} />
        ))}
      </div>
    </div>
  );
}
