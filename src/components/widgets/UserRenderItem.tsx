import { IUserRenderItem } from "@/types";
import { TableCell, TableRow } from "@/ui";
import { TableCellActions } from "./TableCellActions";

export const UserRenderItem = ({
  item,
  noActions = true,
  index,
}: IUserRenderItem) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.username}</TableCell>
      <TableCell className="py-4">{item?.email}</TableCell>
      {noActions && <TableCellActions editURL="/" />}
    </TableRow>
  );
};
