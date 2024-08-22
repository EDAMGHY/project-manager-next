import { Button, Heading, TableCell, TableRow } from "@/components/ui";
import { selectItems, projectsData } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable } from "@/components/widgets";
import { IProject } from "@/types";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div>
      <Heading className="mb-4">Projects</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable renderDataItem={renderDataItem} {...projectsData} />
    </div>
  );
}

const renderDataItem = (item: IProject, index: number) => {
  return (
    <TableRow key={index}>
      <TableCell className="py-4">{item?.name}</TableCell>
      <TableCell className="py-4">{item?.description}</TableCell>
      <TableCell className="py-4">{item?.status}</TableCell>
      <TableCell className="py-4">{item?.startDate}</TableCell>
      <TableCell className="py-4">{item?.endDate}</TableCell>
      <TableCell className="py-4">{item?.budget}</TableCell>
      <TableCell className="py-4">{item?.progress}</TableCell>
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
