import { CardApiDataConverted } from "@/lib/types";
import TaskCard from "./TaskCard";

export default function CardsSection({
  title,
  cardsArray,
  emptyCardsCount,
}: {
  title: string;
  cardsArray: CardApiDataConverted[];
  emptyCardsCount: number;
}) {
  const emptyElementsArr = createEmptyCard();

  function renderSpecificSection(section: CardApiDataConverted[]) {
    return (
      <>
        {section.map((item: CardApiDataConverted) => (
          <TaskCard key={item.id} title={item.title} description={item.description} createdAt={item.createdAt} />
        ))}
        {emptyElementsArr}
      </>
    );
  }

  function createEmptyCard() {
    const elementsArr = [];
    for (let index = 0; index < emptyCardsCount; index++) {
      elementsArr.push(
        <div
          key={index}
          className="border-2 border-foreground-quaternary border-dashed w-[260] h-[216] rounded-xl"
        ></div>
      );
    }
    return elementsArr;
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
