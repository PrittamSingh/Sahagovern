// Dashboard summary
export const summary = {
  total: 1240,
  open: 312,
  inProgress: 198,
  resolved: 730,
};

// Issue categories
export const categories = [
  { name: "Roads", value: 420 },
  { name: "Water", value: 230 },
  { name: "Electricity", value: 300 },
  { name: "Waste", value: 290 },
];

// Issues data
export const issues = [
  {
    id: "ISS-001",
    title: "Pothole on Main Street",
    citizen: "John Doe",
    contact: "9876543210",
    category: "Roads",
    status: "Open",
    date: "2025-09-15",
  },
  {
    id: "ISS-002",
    title: "Water leakage in Sector 5",
    citizen: "Alice Smith",
    contact: "9123456780",
    category: "Water",
    status: "In Progress",
    date: "2025-09-14",
  },
  {
    id: "ISS-003",
    title: "Electricity outage in Block B",
    citizen: "Bob Johnson",
    contact: "9012345678",
    category: "Electricity",
    status: "Resolved",
    date: "2025-09-13",
  },
  {
    id: "ISS-004",
    title: "Garbage not collected in Sector 3",
    citizen: "Carol Lee",
    contact: "9234567890",
    category: "Waste",
    status: "Open",
    date: "2025-09-12",
  },
  {
    id: "ISS-005",
    title: "Street light not working",
    citizen: "David Kim",
    contact: "9345678901",
    category: "Electricity",
    status: "In Progress",
    date: "2025-09-11",
  },
];

// Citizens data
export const citizens = [
  {
    name: "John Doe",
    email: "john@example.com",
    mobile: "9876543210",
    issuesReported: 5,
    lastActive: "2025-09-15",
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    mobile: "9123456780",
    issuesReported: 3,
    lastActive: "2025-09-14",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    mobile: "9012345678",
    issuesReported: 7,
    lastActive: "2025-09-13",
  },
  {
    name: "Carol Lee",
    email: "carol@example.com",
    mobile: "9234567890",
    issuesReported: 2,
    lastActive: "2025-09-12",
  },
  {
    name: "David Kim",
    email: "david@example.com",
    mobile: "9345678901",
    issuesReported: 4,
    lastActive: "2025-09-11",
  },
];
