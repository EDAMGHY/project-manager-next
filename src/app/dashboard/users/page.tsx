import { Heading } from "@/components/ui";
import { selectItems, usersData } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable, UserRenderItem } from "@/components/widgets";

export default function UsersPage() {
  return (
    <div>
      <Heading className="mb-4">Users</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable
        renderDataItem={(item, index) => UserRenderItem({ item, index })}
        {...usersData}
      />
    </div>
  );
}
