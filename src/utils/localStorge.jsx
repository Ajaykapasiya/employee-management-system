


const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Complete Report",
        taskDescription: "Finish the quarterly sales report.",
        taskDate: "2024-12-01",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project updates with client.",
        taskDate: "2024-12-03",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review the code submitted by team members.",
        taskDate: "2024-12-05",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstname: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the marketing strategy.",
        taskDate: "2024-12-02",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Training",
        taskDescription: "Conduct training for new hires.",
        taskDate: "2024-12-04",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstname: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve bugs reported by QA.",
        taskDate: "2024-12-06",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Submit Invoice",
        taskDescription: "Send invoices to the accounts team.",
        taskDate: "2024-12-07",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstname: "Anika",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Market Research",
        taskDescription: "Analyze competitor products.",
        taskDate: "2024-12-08",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Submit Proposal",
        taskDescription: "Send the business proposal to the client.",
        taskDate: "2024-12-09",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstname: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "System Upgrade",
        taskDescription: "Upgrade the server software to the latest version.",
        taskDate: "2024-12-10",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Create content for the company blog.",
        taskDate: "2024-12-11",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
     }];
  
  export const setLocalStorage = () => {
         localStorage.setItem('employees' , JSON.stringify(employees))
         localStorage.setItem('admin' , JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
       

       return {employees , admin}
       
  }