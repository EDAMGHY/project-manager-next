import { IPermissionRenderItem } from "@/types";
import { TableCell, TableRow } from "@/ui";
import { TableCellActions } from "./TableCellActions";

export const PermissionRenderItem = ({
  item,
  index,
  noActions = true,
}: IPermissionRenderItem) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.description}</TableCell>
      {noActions && <TableCellActions deleteURL="/" />}{" "}
    </TableRow>
  );
};
