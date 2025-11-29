import { CardDisplayData } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Ellipsis, Clock } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { parseDate } from "@/lib/utils";

export default function TaskCard({ title, description, createdAt }: CardDisplayData) {
  return (
    <Card className="w-[260] h-[216] flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="font-medium">{title}</CardTitle>
          <Ellipsis color="var(--foreground-quaternary)" />
        </CardHeader>
        <CardContent className="text-foreground-secondary text-sm font-normal">{description}</CardContent>
      </div>
      <CardFooter className="flex items-center justify-between">
        <Badge className="bg-accent font-normal">
          <Clock size={16} />
          <span>{parseDate(createdAt)}</span>
        </Badge>
        <div className="*:data-[slot=avatar]:ring-ring flex -space-x-2 *:data-[slot=avatar]:ring-2">
          <Avatar>
            <AvatarImage src={"/sidebar_user_photo.png"} alt="User" />
          </Avatar>
          <Avatar>
            <AvatarImage src={"/sidebar_user_photo.png"} alt="User" />
          </Avatar>
          <Avatar>
            <AvatarImage src={"/sidebar_user_photo.png"} alt="User" />
          </Avatar>
        </div>
      </CardFooter>
    </Card>
  );
}
