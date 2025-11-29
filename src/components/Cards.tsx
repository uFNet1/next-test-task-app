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
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  sortTasksByStatus(data);

  return (
    <div className="flex flex-row gap-8">
      <CardsSection title="To do" cardsArray={todoCards} />
      <CardsSection title="In Progress" cardsArray={inProgressCards} />
      <CardsSection title="Review" cardsArray={reviewCards} />
      <CardsSection title="Completed" cardsArray={completedCards} />
    </div>
  );
}
