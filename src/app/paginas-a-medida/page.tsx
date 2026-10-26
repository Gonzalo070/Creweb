import Services from "@/components/Services";
import Process from "@/components/Process";

export const metadata = { title: "Páginas a medida | Creweb", description: "Diseñamos y desarrollamos páginas web pensadas para tu marca y tus objetivos." };

export default function CustomPagesPage() {
  return <div className="pb-12 pt-8"><Services /><Process /></div>;
}
