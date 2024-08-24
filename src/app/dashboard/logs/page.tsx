import { Heading } from "@/components/ui";
import { logsData, selectItems } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable, LogsRenderItem } from "@/components/widgets";

export default function LogsPage() {
  return (
    <div>
      <Heading className="mb-4">Logs</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable
        renderDataItem={(item, index) => LogsRenderItem({ item, index })}
        {...logsData}
      />
    </div>
  );
}
