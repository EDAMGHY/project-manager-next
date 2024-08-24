import { Card, CardTitle } from "@/components/ui";
import { ReactNode } from "react";

export const AnalyticCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: ReactNode;
}) => {
  return (
    <Card className="flex gap-5 justify-between items-center py-6 px-4">
      <div className="gap-2 flex-col flex justify-start items-start">
        <CardTitle className="text-zinc-400 text-lg">{title}</CardTitle>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </div>
      <div className="p-4 flex justify-center items-center bg-zinc-900 rounded-full">
        {icon}
      </div>
    </Card>
  );
};
