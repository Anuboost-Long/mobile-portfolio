export interface HighschoolEducationProp {
  label: string
  year: string
  school: string
  achievement: string
}
export interface SchoolPropjectProp {
  label: string
  description: string
  techStack: string[]
}

export const UniversityEducation: string[] = [
  "Python programming",
  "Android development",
  "Database management and System",
  "Java and Scalar",
  "Data Science",
  "Operational Research",
  "Theory of Computation",
  "Computer Network",
  "Security and Cryptography",
  "Software Engineering",
  "Cloud Computing",
  "Principle of Economic",
  "Html Css and Javascript",
  "Math",
  "History",
  "Project Managment",
  "Data Warehouse"
]

export const SchoolProject: SchoolPropjectProp[] = [
  {
    label: "Python Bootcamp",
    description:
      "A two weeks training on Python Programming to enchance the students logical thinking and learn more about the functionality of Python language",
    techStack: ["Python"]
  },
  {
    label: "Vuejs Training",
    description:
      "A week training to learn about web framework (Vue js) to create a web app concept at the end of the training",
    techStack: ["Vue js", "Vuetify"]
  },
  {
    label: "Nodejs Training",
    description:
      "A week training to learn about a javascript framework (Node js) to create a web app concept at the end of the training",
    techStack: ["Node js", "Express js"]
  },
  {
    label: "Smart Locker",
    description: `Build a system that user can book and rent a locker to store their items integrated with qr code
    + Locker can be booked and rent for a period of time
    + Easy payment with Cambodian bank or Credit card
    + Easy unlock and security with qr code from user app or saved as photo
    + Admin dashboard for keeping track of lockers
    + User application for booking locker`,
    techStack: [
      "Express js",
      "Node js",
      "React js",
      "React native",
      "Tailwind",
      "Firebase cloud messaging",
      "My sql"
    ]
  },
  {
    label: "Smart Delivery",
    description: `Build a system that user can book a delviery to transport their parcel from Phnom penh to the School/Resort via school bus. The system is also integrated with the smart locker system
    + Easy Schedule for user to check and make reservation
    + Easy payment with Cambodian bank or Credit card
    + Ensure safety on user package and items via the smart locker
    + Better transport and tracking on the package
    + Driver can update the status and location of the transport
    + Admin dashboard for keeping track of deliveries
    + User application for reservation and easy notification when their packages have arrived`,
    techStack: [
      "Express js",
      "Node js",
      "React js",
      "React native",
      "Tailwind",
      "Firebase cloud messaging",
      "My sql"
    ]
  },
  {
    label: "Webapp Development Training",
    description:
      "Form a team to create a web application to compete by the end of the week for the best app, we decide on making an admin dashboard for delivery service with parcel management and form different service",
    techStack: ["Next js", "Tailwind", "Java springboot", "My Sql"]
  },
  {
    label: "Mobile Development Training",
    description:
      "Form a team to create an application to compete by the end of the week for the best app, we decide on making a task management application call Productively",
    techStack: ["React native", "Firebase function", "Firebase messaging"]
  }
]

export const HighSchoolEducation: HighschoolEducationProp[] = [
  {
    label: "English education",
    year: "2015-2017",
    school: "ICS international school",
    achievement: "Graduated with a 6.0 ielts score since 2017"
  },
  {
    label: "Khmer education",
    year: "2013-2019",
    school: "Baktouk highschool",
    achievement: "Graduated with high grade C in the national exam"
  }
]
