import { Card, CardTitle } from "../ui";
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
    <Card className="flex gap-5 justify-center items-center py-6 px-4">
      {icon}
      <div className="w-full gap-2 flex-col flex justify-start items-start">
        <CardTitle className="text-gray-400">{title}</CardTitle>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </div>
    </Card>
  );
};
