import { Heading } from "@/components/ui";
import { selectItems, projectsData } from "@/lib/mock-data";
import { Filters } from "@/components/modules";
import { InternalTable } from "@/components/widgets";
import { ProjectRenderItem } from "@/widgets";

export default function ProjectsPage() {
  return (
    <div>
      <Heading className="mb-4">Projects</Heading>
      <Filters selectItems={selectItems} />
      <InternalTable
        renderDataItem={(item, index) => ProjectRenderItem({ item, index })}
        {...projectsData}
      />
    </div>
  );
}
