import { Heading } from "@/ui";
import { selectItems, permissionsData } from "@/lib/mock-data";
import { Filters } from "@/modules";
import { InternalTable, PermissionRenderItem } from "@/widgets";

export default function PermissionsPage() {
  return (
    <div>
      <Heading className="mb-4">Permissions</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable
        renderDataItem={(item, index) => PermissionRenderItem({ item, index })}
        {...permissionsData}
      />
    </div>
  );
}
