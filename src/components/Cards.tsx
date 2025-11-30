"use client";
import useTasks from "@/hooks/useTasks";
import { CardApiDataConverted } from "@/lib/types";
import CardsSection from "./CardsSection";

let todoCards: CardApiDataConverted[] = [];
let inProgressCards: CardApiDataConverted[] = [];
let reviewCards: CardApiDataConverted[] = [];
let completedCards: CardApiDataConverted[] = [];

function sortTasksByStatus(allCards: CardApiDataConverted[] | undefined) {
  if (allCards === undefined) return;
  todoCards = [];
  inProgressCards = [];
  reviewCards = [];
  completedCards = [];
  for (const element of allCards) {
    switch (element.status) {
      case "to-do":
        todoCards.push(element);
        break;
      case "in-progress":
        inProgressCards.push(element);
        break;
      case "review":
        reviewCards.push(element);
        break;
      case "completed":
        completedCards.push(element);
        break;
      default:
        break;
    }
  }
}

export default function Cards() {
  const { status, data, error, isFetching } = useTasks();

  function calculateNeededEmpties(arrayLength: number) {
    const biggestNum = Math.max(todoCards.length, inProgressCards.length, reviewCards.length, completedCards.length);
    return biggestNum - arrayLength;
  }
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  sortTasksByStatus(data);
  return (
    <div className="flex flex-row gap-8">
      <CardsSection title="To do" cardsArray={todoCards} emptyCardsCount={calculateNeededEmpties(todoCards.length)} />
      <CardsSection
        title="In Progress"
        cardsArray={inProgressCards}
        emptyCardsCount={calculateNeededEmpties(inProgressCards.length)}
      />
      <CardsSection
        title="Review"
        cardsArray={reviewCards}
        emptyCardsCount={calculateNeededEmpties(reviewCards.length)}
      />
      <CardsSection
        title="Completed"
        cardsArray={completedCards}
        emptyCardsCount={calculateNeededEmpties(completedCards.length)}
        isCompleted={true}
      />
    </div>
  );
}
