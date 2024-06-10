
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Monisha",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Monisha",
  description: "A versatile Software Engineer blending expertise in full-stack development.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1hqxrt-ljxTAG3Oo-AOJNEOmsQJh0AZsK/view?usp=drive_link",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I embarked on my academic journey at the Indian Institute Of Information Technology, Guwahati, graduating in 2021 with a B.Tech in Computer Science. My passion for technology led me to further my studies with a Post Grad. Certificate in Full Stack Software Development from Lambton College, Toronto, achieving placement on the Dean's Honour List.",
    "My professional experience began as an intern at Tekion Corp., where I quickly ascended the ranks to become a Software Engineer. Here, I've contributed to diverse projects, enhancing dealership management systems and developing innovative backend features. My expertise spans a wide range of technologies, including Java, Python, and full-stack development, enabling me to craft scalable and impactful digital solutions.",
    "Beyond my technical skills, I'm deeply committed to personal growth and community engagement. During my bachelor's, I was a Programming Club Coordinator, fostering programming skills among peers and emphasizing the importance of industry connections. Now, as the GDSC Club President in my post-grad studies, I organize events and teach students about various industry-relevant technologies. My extracurricular activities, from graphic design to participation in coding contests, reflect a well-rounded interest in technology's creative and competitive aspects. I'm driven by the belief in being the change I wish to see in the world, a principle that guides both my professional endeavors and personal projects."
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Software Engineer - Tekion",
      description: "I spearheaded the development of core product features, overseeing the entire process from the initial design phase to the final delivery. By streamlining product requirements into precise engineering tasks, I facilitated effective project scoping and the delegation of tasks, ensuring a smooth and efficient workflow throughout the development lifecycle.",
      icons: null,
    },
    {
      title: "Associate Software Engineer - Tekion",
      description:"I collaborated with the Core Accounting Team to enhance our dealership management system, developing critical backend features and advanced accounting reports for real-time analysis. By implementing Kafka for asynchronous event handling, I ensured data reliability and optimized database queries, achieving a 30% reduction in execution time and significantly reducing data retrieval overheads.",
      icons: null,
    },
    {
      title: "Software Engineer Intern - Tekion",
      description:"As part of the Backend team, I developed an employee management system that enhanced leave application processes and provided role-specific management features.",
      icons: null,
    },
    {
      title: "Software Development Intern - Smart Doctors",
      description:"I developed a video conferencing feature utilizing the Twilio API, significantly enhancing communication capabilities. Additionally, I transitioned the website from PHP to the Laravel MVC framework, which not only enhanced the site's functionality but also improved the overall user experience.",
      icons: null,
    },
    {
      title: "Web Development Intern - Certcube",
      description:"I crafted and implemented an interactive training portal to boost learning engagement. Furthermore, I spearheaded the creation and development of the company’s official website, boosting its online presence and accessibility.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Moodify",
      description: "Moodify is a music recommendation system that suggests tracks based on your current mood and preferences. Leveraging the Spotify API for music recommendations and OpenAI's ChatGPT for natural language understanding, it offers user authentication, mood analysis, and a history of mood-based music recommendations."
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/scarlet2131/Moodify-SoulSonic",
        },
      ]
    },
    {
      title: "Integrated Dealership Database Upgrade",
      description: "I unified dealership databases across MySQL and MongoDB, streamlined data syncing, and enhanced error handling for better scalability and simplicity.",
    },
    {
      title: "Centralized Dealership System",
      description: "I developed a centralized payment system with Kafka for asynchronous transactions, reducing manual processing and enhancing efficiency."
    },
    {
      title: "Meditrack",
      description: "I created an app for real-time disease tracking and medicine sales analysis, aiding in health management and epidemic prevention.",
      // icons: [
      //   {
      //     icon: faGithub,
      //     link: "https://github.com/hashirshoaeb/portfolio",
      //   },
      // ]
    },
    {
      title: "PBFT",
      description: "Simulated PBFT Consensus Algorithm across a road network with RSU and OBU, showcasing n/3 fault tolerance. The process includes leader selection from N nodes, encrypted pre-preparation messages, validity checks, and consensus through a (2*f + 1) rule, culminating in the most frequent correct message as output.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/scarlet2131/PBFT",
        },
      ]
    }
  ],
}


export const contact = {
  title: "Get in touch",
  description: "I'm open for a chat! Feel free to schedule a meeting or simply reach out to me directly at ranjan.monisha233@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:ranjan.monisha233@gmail.com",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Monisha Ranjan | Full Stack Software Engineer ",
  description: "A versatile Software Engineer blending expertise in full-stack development. I graduated from IIIT guwahati in 2021 with a degree in Computer Science.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@monisharanjan",
  description: "Full Stack Software Engineer",
  cards: [
    {
      title: "My website",
      link: "https://scarlet2131.github.io/-portfolio/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/scarlet2131",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/monisharanjan/",
    },
  ]
}