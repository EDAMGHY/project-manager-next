import { Button, Heading, TableCell, TableRow } from "@/components/ui";
import { selectItems, rolesData } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable } from "@/components/widgets";
import { IRole } from "@/types";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";

export default function RolesPage() {
  return (
    <div>
      <Heading className="mb-4">Roles</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable renderDataItem={renderDataItem} {...rolesData} />
    </div>
  );
}

const renderDataItem = (item: IRole, index: number) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.description}</TableCell>
      <TableCell className="flex gap-4 py-4">
        <Button variant="secondary">
          <FaPenAlt size={18} />
        </Button>
        <Button variant="destructive">
          <FaTrashAlt size={18} />
        </Button>
      </TableCell>
    </TableRow>
  );
};
