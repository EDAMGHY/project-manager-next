import { IRoleRenderItem } from "@/types";
import { TableCell, TableRow } from "@/ui";
import { TableCellActions } from "./TableCellActions";

export const RoleRenderItem = ({
  item,
  noActions = true,
  index,
}: IRoleRenderItem) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.description}</TableCell>
      {noActions && <TableCellActions editURL="/" />}
    </TableRow>
  );
};
