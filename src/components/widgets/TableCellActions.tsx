"use client";

import { ITableCellActions } from "@/types";
import { Button, TableCell } from "@/ui";
import Link from "next/link";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";

export const TableCellActions = ({
  editURL,
  deleteURL,
  editOnClick,
  deleteOnClick,
}: ITableCellActions) => {
  return (
    <TableCell className="flex gap-4 py-4">
      <Button
        onClick={(e) => editOnClick?.(e)}
        asChild={!!editURL}
        variant="secondary"
      >
        {editURL ? (
          <Link href={editURL}>
            <FaPenAlt size={18} />
          </Link>
        ) : (
          <FaPenAlt size={18} />
        )}
      </Button>
      <Button
        onClick={(e) => deleteOnClick?.(e)}
        asChild={!!deleteURL}
        variant="destructive"
      >
        {deleteURL ? (
          <Link href={deleteURL}>
            <FaTrashAlt size={18} />
          </Link>
        ) : (
          <FaTrashAlt size={18} />
        )}
      </Button>
    </TableCell>
  );
};
