const employees = [
  {
    "id": 1,
    "name": "Rajan",
    "email": "rajan@rajan.com",
    "role": "employee",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Organize Workshop",
        "description": "Coordinate the logistics for the upcoming design workshop.",
        "date": "2024-10-12",
        "category": "Event"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Write Blog Post",
        "description": "Draft a blog post on sustainable design practices.",
        "date": "2024-09-25",
        "category": "Content Creation"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Team Meeting",
        "description": "Schedule and lead the weekly design team meeting.",
        "date": "2024-10-05",
        "category": "Meetings"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "name": "David",
    "email": "david@david.com",
    "role": "employee",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Market Research",
        "description": "Conduct a survey on customer preferences for new product features.",
        "date": "2024-10-10",
        "category": "Research"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Product Launch Planning",
        "description": "Plan the launch event for the new product line.",
        "date": "2024-09-18",
        "category": "Marketing"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Customer Support Training",
        "description": "Train the customer support team on new service procedures.",
        "date": "2024-10-07",
        "category": "Training"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Sophia Martinez",
    "email": "sophia.martinez@example.com",
    "role": "employee",
    "password": "sophia789",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Data Cleanup",
        "description": "Clean and organize the customer database.",
        "date": "2024-10-15",
        "category": "Database"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Marketing Campaign",
        "description": "Finalize the marketing campaign for the holiday season.",
        "date": "2024-09-30",
        "category": "Marketing"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Website Redesign",
        "description": "Oversee the redesign of the company website.",
        "date": "2024-10-14",
        "category": "Web Development"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "name": "James Evans",
    "email": "james.evans@example.com",
    "role": "employee",
    "password": "securepass321",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Software Update",
        "description": "Update the internal CRM software to the latest version.",
        "date": "2024-10-09",
        "category": "IT"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Server Migration",
        "description": "Migrate the database to the new server infrastructure.",
        "date": "2024-09-20",
        "category": "IT"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Security Audit",
        "description": "Conduct a security audit on the company's network.",
        "date": "2024-10-12",
        "category": "Security"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Charlotte Johnson",
    "email": "charlotte.johnson@example.com",
    "role": "employee",
    "password": "charlotte456",
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Project Proposal",
        "description": "Write the proposal for the new project initiative.",
        "date": "2024-10-08",
        "category": "Project Management"
      },
      {
        "taskNumber": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Budget Review",
        "description": "Review the department budget for the next quarter.",
        "date": "2024-09-28",
        "category": "Finance"
      },
      {
        "taskNumber": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Client Presentation",
        "description": "Prepare a presentation for the upcoming client meeting.",
        "date": "2024-10-10",
        "category": "Presentations"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];



const admin = [
  {
    id: 1,
    name: "Rajan Bhandari",
    email: "admin@example.com",
    role: "admin",
    password: "123",
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