import { cn } from "../../lib/utils";
import { IInternalTable } from "../../types";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";

export const InternalTable = <T,>({
  caption,
  columns = [],
  data = [],
  renderDataItem,
  className,
}: IInternalTable<T>) => {
  return (
    <Table className={cn("my-10", className)}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead data-field={column.field} key={index}>
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => renderDataItem(item, index, columns))}
      </TableBody>
    </Table>
  );
};
