import { Button, Heading, TableCell, TableRow } from "../../../components/ui";
import { selectItems, usersData } from "../../../lib/mock-data";
import { Filters } from "../../../components/modules";
import { InternalTable } from "../../../components/widgets";
import { IUser } from "../../../types";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";

export default function UsersPage() {
  return (
    <div>
      <Heading className="mb-4">Users</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable renderDataItem={renderDataItem} {...usersData} />
    </div>
  );
}

const renderDataItem = (item: IUser, index: number) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.username}</TableCell>
      <TableCell className="py-4">{item?.email}</TableCell>
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
