import { IProjectRenderItem } from "@/types";
import { TableCell, TableRow } from "@/ui";
import { TableCellActions } from "./TableCellActions";

export const ProjectRenderItem = ({
  item,
  index,
  noActions = true,
}: IProjectRenderItem) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.description}</TableCell>
      <TableCell className="py-4">{item?.status}</TableCell>
      <TableCell className="py-4">{item?.startDate}</TableCell>
      <TableCell className="py-4">{item?.endDate}</TableCell>
      <TableCell className="py-4">{item?.budget}</TableCell>
      <TableCell className="py-4">{item?.progress}</TableCell>
      {noActions && <TableCellActions editURL="/" />}{" "}
    </TableRow>
  );
};
