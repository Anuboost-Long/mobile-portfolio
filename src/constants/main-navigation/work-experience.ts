export interface ProjectProp {
  name: string
  description: string
  duty: string[]
  techs: string[]
}

export interface WorkProp {
  role: string
  company: string
  period: string
  projects: ProjectProp[]
}

export const WorkingExperience: WorkProp[] = [
  {
    role: "React native Developer",
    company: "Peppermint Cambodia Technology",
    period: "Sep,2023 - April,2024",
    projects: [
      {
        name: "Huwin Application",
        description:
          "A real estate application that help businesses create network and give commission to users within the network",
        duty: [
          "Assist team in building UI from user stories",
          "Integrate api to the components",
          "Ensure all tickets are resolved at a timely manner",
          "Write test case and record demos for team review"
        ],
        techs: [
          "React native",
          "One signal",
          "Expo",
          "Redux tool kit",
          "Php(Symphony)",
          "React native paper"
        ]
      }
    ]
  },
  {
    role: "Mobile team lead",
    company: "Ly brothers group",
    period: "Dec,2022 - Present",
    projects: [
      {
        name: "Akasa e-commerce",
        description:
          "An e-commerce app that user can browse and buy products from variety of categories",
        duty: [
          "Upgrade project to newer and more optimized app from scratch",
          "Ensure smooth api integration with better experience than vendor developed app",
          "Make plans and assign tasks for team to ensure on time delivery",
          "Mantain and support operations"
        ],
        techs: [
          "React native",
          "Firebase Cloud Messaging",
          "Expo",
          "Jotai",
          "Php(Laravel)"
        ]
      },
      {
        name: "Akasa Vendor app",
        description:
          "A vendor app that allow users to set up shop and sell their products on the AKASA system",
        duty: [
          "Upgrade project to newer and more optimized app from scratch",
          "Ensure smooth api integration with better experience than vendor developed app",
          "Make plans and assign tasks for team to ensure on time delivery",
          "Mantain and support operations"
        ],
        techs: [
          "React native",
          "Firebase Cloud Messaging",
          "Expo",
          "Jotai",
          "Php(Laravel)"
        ]
      },
      {
        name: "Apollo Warehouse scanning app",
        description:
          "An application that assist the operation team in scanning the parcel or items from international shipping to keep track in warehouse",
        duty: [
          "Build project from scratch (individually)",
          "Ensure smooth api integration",
          "Make sure the scanning functionality can perform smoothly and easing operation team",
          "Mantain and support operations"
        ],
        techs: ["React native", "Expo", "Jotai", "Php(Laravel)"]
      },
      {
        name: "Apollo Customer",
        description:
          "An e-logistics application that helps user/vendor and businesses in delivering their items products or packages to the customer or destination. The app also consist of other services such as Truck Service, International shipping",
        duty: [
          "Upgrade project to newer and more optimized app from scratch",
          "Ensure smooth api integration with better experience than vendor developed app",
          "Make plans and assign tasks for team to ensure on time delivery",
          "Mantain and support operations plus adding new features to the application"
        ],
        techs: [
          "React native",
          "Redux",
          "Redux thunk",
          "Firebase cloud messaging",
          "PHP (laravel)"
        ]
      },
      {
        name: "Apollo Driver",
        description:
          "An application that helps drivers sorting out their delivery task and update status of each packages for customer while keeping history of the tasks",
        duty: [
          "Upgrade project to newer and more optimized app from scratch",
          "Ensure smooth api integration with better experience than vendor developed app",
          "Make plans and assign tasks for team to ensure on time delivery",
          "Mantain and support operations plus adding new features to the application"
        ],
        techs: [
          "React native",
          "Redux",
          "Redux thunk",
          "Firebase cloud messaging",
          "PHP (laravel)"
        ]
      }
    ]
  },
  {
    role: "Mobile Developer",
    company: "Gogo Food Company",
    period: "Nov,2021 - Nov,2022",
    projects: [
      {
        name: "Mbus Customer",
        description:
          "A ticketing application where user can buy bus ticket and order parcel delivery",
        duty: [
          "Work with team to build the app from scratch",
          "Ensure smooth api integration and seemless request",
          "Work with team lead to delivery project on time"
        ],
        techs: [
          "React native",
          "Redux thunk",
          "Branch.io",
          "Redux",
          "Nest Js",
          "Swagger",
          "FCM"
        ]
      },
      {
        name: "Mbus Driver",
        description:
          "An application to assist driver in managing and scanning user tickets and keep track of item being delivered",
        duty: [
          "Work with team to build the app from scratch",
          "Ensure smooth api integration and seemless request",
          "Work with team lead to delivery project on time"
        ],
        techs: [
          "React native",
          "Redux thunk",
          "Branch.io",
          "Redux",
          "Nest Js",
          "Swagger",
          "FCM"
        ]
      },
      {
        name: "Gogo Customer",
        description:
          "An application allow user to order foods and products that will deliver to them at the front door",
        duty: [
          "Assist in maintaining the application",
          "Working on improvement of the application",
          "Integrate new feature requested by the product owner",
          "Mantain and support operations"
        ],
        techs: [
          "React native",
          "Redux",
          "Redux saga",
          "Express js",
          "FCM",
          "Branch.io",
          "Websocket"
        ]
      },
      {
        name: "Gogo Restaurant",
        description:
          "An application that assist vendor and restaurant in receiveing orders and update status of the delivery to notify user",
        duty: [
          "Assist in maintaining the application",
          "Working on improvement of the application",
          "Integrate new feature requested by the product owner",
          "Mantain and support operations"
        ],
        techs: [
          "React native",
          "Redux",
          "Redux saga",
          "Express js",
          "FCM",
          "Branch.io",
          "Websocket"
        ]
      },
      {
        name: "Gogo Driver",
        description:
          "An application that help driver delivering food via accurate map and updating status of delivery to user",
        duty: [
          "Assist in maintaining the application",
          "Working on improvement of the application",
          "Integrate new feature requested by the product owner",
          "Mantain and support operations"
        ],
        techs: [
          "React native",
          "Redux",
          "Redux saga",
          "Express js",
          "FCM",
          "Branch.io",
          "Websocket"
        ]
      }
    ]
  },
  {
    role: "Web developer intern",
    company: "Sala. co",
    period: "May,2021 - Nov,2021",
    projects: [
      {
        name: "School Management System",
        description:
          "A web application as a micro service for schools and university to pay a subscription to use the system to manage students and statistic of students",
        duty: [
          "Assist in making new feature of the system",
          "Integrate api to the web application",
          "Meeting team to demo progree"
        ],
        techs: ["Vue", "Nuxt", "Ant design", "Nodejs", "Kay cloak"]
      },
      {
        name: "Learning Management System",
        description:
          "A web application as a micro service for schools and university to pay a subscription to use the system to manage courses and sell course for students while allowing student to enroll to the courses they want to study",
        duty: [
          "Assist in making new feature of the system",
          "Integrate api to the web application",
          "Meeting team to demo progree"
        ],
        techs: ["Vue", "Nuxt", "Vue bootstrap", "Nodejs", "Kay cloak"]
      }
    ]
  }
]
