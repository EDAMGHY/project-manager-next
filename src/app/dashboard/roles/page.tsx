import { Heading } from "@/components/ui";
import { selectItems, rolesData } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable, RoleRenderItem } from "@/widgets";

export default function RolesPage() {
  return (
    <div>
      <Heading className="mb-4">Roles</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable
        renderDataItem={(item, index) => RoleRenderItem({ item, index })}
        {...rolesData}
      />
    </div>
  );
}
