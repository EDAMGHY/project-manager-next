import { IOverviewDataCard } from "@/types";
import { Heading } from "../ui";
import { InternalTable } from "./InternalTable";
import { cn } from "@/lib/utils";

export const OverviewDataCard = ({
  title,
  className,
  data = [],
  columns = [],
  renderDataItem,
}: IOverviewDataCard) => {
  return (
    <div className={cn("space-y-4 border border-input p-4 rounded", className)}>
      <Heading isBold variant="h4">
        {title}
      </Heading>
      <InternalTable
        isCards
        className="my-0"
        renderDataItem={(item, index) =>
          renderDataItem({ item, index, noActions: false })
        }
        columns={columns.slice(0, -1)}
        data={data.slice(0, 5)}
      />
    </div>
  );
};
