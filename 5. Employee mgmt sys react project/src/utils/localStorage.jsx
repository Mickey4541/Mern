const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Monthly Report",
        description:
          "Complete the financial report for the month of September.",
        date: "2024-09-30",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Attend the project kickoff meeting with the new client.",
        date: "2024-09-15",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Feedback",
        description:
          "Submit feedback on the new software tool introduced last week.",
        date: "2024-09-25",
        category: "Feedback",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Website",
        description:
          "Revise the homepage content based on the latest marketing strategy.",
        date: "2024-10-01",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Social Media Campaign",
        description: "Plan and schedule posts for the next product launch.",
        date: "2024-10-05",
        category: "Social Media",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Presentation",
        description: "Deliver a presentation on the performance metrics of Q3.",
        date: "2024-09-22",
        category: "Presentations",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Survey",
        description: "Gather client feedback on the new service packages.",
        date: "2024-09-18",
        category: "Surveys",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Product Design Review",
        description: "Review the design of the new mobile app.",
        date: "2024-10-03",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer Support Meeting",
        description: "Discuss key issues with the support team.",
        date: "2024-09-20",
        category: "Support",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Inventory Management",
        description: "Oversee the restocking of key products.",
        date: "2024-10-04",
        category: "Inventory",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "New Hire Training",
        description: "Conduct training sessions for new employees.",
        date: "2024-10-07",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget Forecast",
        description: "Submit the budget forecast for the upcoming quarter.",
        date: "2024-09-28",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Data Analysis",
        description: "Analyze the performance data of the marketing campaign.",
        date: "2024-10-06",
        category: "Analysis",
      },
    ],
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    role: "employee",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Server Maintenance",
        description: "Perform routine server maintenance and updates.",
        date: "2024-10-03",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "System Backup",
        description: "Complete the monthly backup of the company systems.",
        date: "2024-09-25",
        category: "IT",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Network Optimization",
        description: "Improve the performance of the office network.",
        date: "2024-10-08",
        category: "IT",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin Bhandari",
    email: "admin@example.com",
    role: "admin",
    password: "admin123",
  },
];

//setting data in local storage.
export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

//getting data from local storage.
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  // console.log(employees,admin);

  return {employees, admin}
  
}