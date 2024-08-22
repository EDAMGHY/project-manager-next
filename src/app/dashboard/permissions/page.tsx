import { Button, Heading, TableCell, TableRow } from "@/components/ui";
import { selectItems, permissionsData } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable } from "@/components/widgets";
import { IPermission } from "@/types";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";

export default function PermissionsPage() {
  return (
    <div>
      <Heading className="mb-4">Permissions</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable renderDataItem={renderDataItem} {...permissionsData} />
    </div>
  );
}

const renderDataItem = (item: IPermission, index: number) => {
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
