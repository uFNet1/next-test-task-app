import { CardApiData, CardApiDataConverted } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const fetchTasks = async (): Promise<Array<CardApiDataConverted>> => {
  const response = await fetch("https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks");
  const data: CardApiData[] = await response.json();
  return data.map((item: CardApiData) => {
    const validStatuses = ["to-do", "in-progress", "review", "completed"] as const;
    const status = validStatuses.includes(item.status as any)
      ? (item.status as CardApiDataConverted["status"])
      : "to-do";
    return {
      ...item,
      id: Number(item.id),
      createdAt: new Date(item.createdAt),
      status,
    };
  });
};

const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(),
  });
};

export default useTasks;
