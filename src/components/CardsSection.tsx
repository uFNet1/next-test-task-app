import { CardApiDataConverted } from "@/lib/types";
import TaskCard from "./TaskCard";

export default function CardsSection({ title, cardsArray }: { title: string; cardsArray: CardApiDataConverted[] }) {
  function renderSpecificSection(section: CardApiDataConverted[]) {
    return section.map((item: CardApiDataConverted) => (
      <TaskCard key={item.id} title={item.title} description={item.description} createdAt={item.createdAt} />
    ));
  }
  return (
    <div>
      <span className="font-medium text-base">
        {title} ({cardsArray.length})
      </span>
      <div className="flex flex-col gap-6 mt-4">{renderSpecificSection(cardsArray)}</div>
    </div>
  );
}
