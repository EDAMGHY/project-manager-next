import {
  FaFolderPlus,
  FaUsers,
  FaTasks,
  FaCog,
  FaUniversalAccess,
  FaRegUserCircle,
} from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiFoldersLine, RiSettings2Line } from "react-icons/ri";
import { FaUsersRays } from "react-icons/fa6";
import { BsShieldLock } from "react-icons/bs";
import { PiUsersFour } from "react-icons/pi";

export const authenticatedUser = {
  name: "John Doe",
  email: "john@doe.com",
};

export const overviewData = [
  {
    title: "Users",
    value: 100,
    icon: <FaUsers className="shrink-0" size={48} />,
  },
  {
    title: "Projects",
    value: 12,
    icon: <FaFolderPlus className="shrink-0" size={48} />,
  },
  {
    title: "Tasks",
    value: 45,
    icon: <FaTasks className="shrink-0" size={48} />,
  },
  {
    title: "Roles",
    value: 5,
    icon: <FaCog className="shrink-0" size={48} />,
  },
  {
    title: "Permissions",
    value: 30,
    icon: <FaUniversalAccess className="shrink-0" size={48} />,
  },
];

export const selectItems = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Description",
    value: "description",
  },
  {
    label: "Price",
    value: "price",
  },
];

export const usersData = {
  columns: [
    {
      label: "Name",
      field: "name",
    },
    {
      label: "Username",
      field: "username",
    },
    {
      label: "Email",
      field: "email",
    },
    {
      label: "Actions",
      field: "actions",
    },
  ],
  data: [
    {
      name: "John Doe",
      username: "johndoe123",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      username: "janesmith456",
      email: "jane.smith@example.com",
    },
    {
      name: "Michael Brown",
      username: "michaelb789",
      email: "michael.brown@example.com",
    },
    {
      name: "Emily Johnson",
      username: "emilyj678",
      email: "emily.johnson@example.com",
    },
    {
      name: "David Lee",
      username: "davidl999",
      email: "david.lee@example.com",
    },
    {
      name: "Sophia Davis",
      username: "sophiad654",
      email: "sophia.davis@example.com",
    },
    {
      name: "James Wilson",
      username: "jamesw111",
      email: "james.wilson@example.com",
    },
    {
      name: "Olivia Martinez",
      username: "oliviam333",
      email: "olivia.martinez@example.com",
    },
    {
      name: "Liam Garcia",
      username: "liamg222",
      email: "liam.garcia@example.com",
    },
    {
      name: "Ava Rodriguez",
      username: "avar888",
      email: "ava.rodriguez@example.com",
    },
  ],
};
export const projectsData = {
  columns: [
    { label: "Project Name", field: "name" },
    { label: "Description", field: "description" },
    { label: "Status", field: "status" },
    { label: "Start Date", field: "startDate" },
    { label: "End Date", field: "endDate" },
    { label: "Budget", field: "budget" },
    { label: "Progress (%)", field: "progress" },
    {
      label: "Actions",
      field: "actions",
    },
  ],

  data: [
    {
      name: "Project Alpha",
      description: "This is the first project.",
      status: "planning",
      startDate: "2024-01-01",
      endDate: "2024-06-01",
      budget: 5000,
      progress: 10,
      user: "64f5a5a1d42f4b4e40a12345", // Mock ObjectId
    },
    {
      name: "Project Beta",
      description: "This is the second project.",
      status: "active",
      startDate: "2023-09-15",
      endDate: "2024-03-15",
      budget: 10000,
      progress: 50,
      user: "64f5a5a1d42f4b4e40a67890", // Mock ObjectId
    },
    {
      name: "Project Gamma",
      description: "This is the third project.",
      status: "completed",
      startDate: "2022-05-01",
      endDate: "2023-05-01",
      budget: 20000,
      progress: 100,
      user: "64f5a5a1d42f4b4e40a98765", // Mock ObjectId
    },
    {
      name: "Project Delta",
      description: "This is the fourth project.",
      status: "active",
      startDate: "2023-01-10",
      endDate: "2024-01-10",
      budget: 15000,
      progress: 75,
      user: "64f5a5a1d42f4b4e40a24680", // Mock ObjectId
    },
  ],
};
export const rolesData = {
  columns: [
    { label: "Role Name", field: "name" },
    { label: "Description", field: "description" },
    {
      label: "Actions",
      field: "actions",
    },
  ],

  data: [
    {
      name: "Admin",
      description: "Full access to all resources and settings.",
    },
    {
      name: "Editor",
      description: "Can edit content but has limited access to settings.",
    },
    {
      name: "Viewer",
      description: "Can view content but cannot make any changes.",
    },
    {
      name: "Moderator",
      description:
        "Can manage user-generated content and moderate discussions.",
    },
    {
      name: "Contributor",
      description:
        "Can contribute new content but requires approval for publication.",
    },
  ],
};

export const permissionsData = {
  columns: [
    { label: "Permission Name", field: "name" },
    { label: "Description", field: "description" },
    {
      label: "Actions",
      field: "actions",
    },
  ],

  data: [
    {
      name: "View Content",
      description: "Allows the user to view content.",
    },
    {
      name: "Edit Content",
      description: "Allows the user to edit existing content.",
    },
    {
      name: "Delete Content",
      description: "Allows the user to delete content.",
    },
    {
      name: "Manage Users",
      description: "Allows the user to manage other users and their roles.",
    },
    {
      name: "Access Settings",
      description: "Allows the user to access and change system settings.",
    },
  ],
};

export const mainMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "About",
    link: "/about",
  },
];

export const sidebarMenus = [
  {
    title: "Overview",
    icon: RxDashboard,
    link: "/dashboard/overview",
  },
  {
    title: "Users",
    icon: PiUsersFour,
    link: "/dashboard/users",
  },
  {
    title: "Projects",
    icon: RiFoldersLine,
    link: "/dashboard/projects",
  },
  {
    title: "Roles",
    icon: FaUsersRays,
    link: "/dashboard/roles",
  },

  {
    title: "Permissions",
    icon: BsShieldLock,
    link: "/dashboard/permissions",
  },
  {
    title: "Profile",
    icon: FaRegUserCircle,
    link: "/dashboard/profile",
  },
  {
    title: "Settings",
    icon: RiSettings2Line,
    link: "/dashboard/settings",
  },
];
