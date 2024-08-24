import { ILogRenderItem } from "@/types";
import { TableCell, TableRow } from "@/ui";
import { TableCellActions } from "./TableCellActions";

export const LogsRenderItem = ({
  item,
  noActions = true,
  index,
}: ILogRenderItem) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.action}</TableCell>
      <TableCell className="py-4">{item?.description}</TableCell>
      <TableCell className="py-4">{item?.role}</TableCell>
      <TableCell className="py-4">{item?.ipAddress}</TableCell>
      <TableCell className="py-4">{item?.method}</TableCell>
      <TableCell className="py-4">{item?.endpoint}</TableCell>
      <TableCell className="py-4">{item?.statusCode}</TableCell>
      <TableCell className="py-4">{item?.responseTime}</TableCell>
      <TableCell className="py-4">{item?.userAgent}</TableCell>
      {noActions && <TableCellActions editURL="/" />}
    </TableRow>
  );
};
