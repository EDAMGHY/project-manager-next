import { Heading } from "@/ui";
import {
  logsData,
  overviewData,
  permissionsData,
  projectsData,
  rolesData,
  usersData,
} from "@/lib/mock-data";
import {
  AnalyticCard,
  LogsRenderItem,
  OverviewDataCard,
  PermissionRenderItem,
  ProjectRenderItem,
  RoleRenderItem,
  UserRenderItem,
} from "@/widgets";

export default function OverviewPage() {
  return (
    <div className="space-y-5">
      <Heading className="mb-4">Overview</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {overviewData.map((over, index) => (
          <AnalyticCard key={index + 1} {...over} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OverviewDataCard
          renderDataItem={UserRenderItem}
          title="Latest Users"
          className="col-span-2"
          data={usersData.data}
          columns={usersData.columns}
        />
        <OverviewDataCard
          renderDataItem={ProjectRenderItem}
          title="Latest Projects"
          className="col-span-2"
          data={projectsData.data}
          columns={projectsData.columns}
        />
        <OverviewDataCard
          renderDataItem={RoleRenderItem}
          title="Latest Roles"
          data={rolesData.data}
          columns={rolesData.columns}
        />
        <OverviewDataCard
          renderDataItem={PermissionRenderItem}
          title="Latest Permissions"
          data={permissionsData.data}
          columns={permissionsData.columns}
        />

        <OverviewDataCard
          renderDataItem={LogsRenderItem}
          title="Latest Logs"
          className="col-span-2"
          data={logsData.data}
          columns={logsData.columns}
        />
      </div>
    </div>
  );
}
