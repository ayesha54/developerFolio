/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayesha Kaleem",
  title: "Hi all, I'm Ayesha",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of Backend Development and DevOps using Golang / Python / Docker / Kubernetes /Openshift and some other cool technologies."
      ),
  resumeLink:
    "https://drive.google.com/file/d/1LMdiu-fwTE24KXI2K8yzx4PljEVVAJOG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ayesha54",
  linkedin: "https://www.linkedin.com/in/ayesha-kaleem-015187b0",
  gmail: "akaleem306@gmail.com",
  twitter: "https://twitter.com/Ayesha546",
  medium: "https://medium.com/@akaleem306",
  stackoverflow: "https://stackoverflow.com/users/4784745",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPMENT WITH A DEVOPS MINDSET",
  skills: [
    emoji(
      "⚡ Major Skills (Containerization, Kubernetes, OpenShift, Golang, Vmware Vsphere)"
    ),
    emoji("⚡ General Programming (Python, C/C++, Java, Golang)"),
    emoji(
      "⚡ Web Development (Ruby on Rails (MVC), JavaScript, HTML5, CSS3, Bootstrap, Laravel, PHP)"
    ),
    emoji(
      "⚡ Open-Source Automation Tools (Bash scripting, Dockers, Kubernetes, Terraform)"
    ),
    emoji(
      "⚡ Databases (SQL-server, MySQL, Postgresql)"
    ),
    emoji(
      "⚡ Operating Systems (Windows, Linux Server (Ubuntu, CentOS), Unix (macOS))"
    ),
    emoji(
      "⚡ Version Control Systems and Software Project management tools (Jira, GitHub, Bit Bucket)"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Openshift",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jinnah University For Women",
      logo: require("./assets/images/harvardLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2015 - Decemeber 2018",
      descBullets: [
        "https://cs.juw.edu.pk/computerscience.html"
      ]
    }  
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Developent", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer - OpenShift Core Engineering",
      company: "Red Hat",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2021 – Present",
      desc: "Red Hat OpenShift Container Platform is an enterprise-grade Kubernetes container platform that automates operations across the stack to make it even easier to manage hybrid and multi-clouds. It enables faster application deployment and increases developer productivity. Automate lifecycle management for more security, customized and easy-to-use cluster operations, and portable applications.",
      descBullets: [
        "Working with the Core Openshift Engineering team to add features and resolve bugs in the Openshift Installer and other Openshift repositories using Golang.",
        "Implement and manage CI/CD pipelines.",
        "Building and managing Openshift clusters on Vmware Vsphere",
        "Developing python notebooks for monitoring the data",
      ]
    },
    {
      role: "Backend/DevOps Software Engineer",
      company: "Infinite Devices GmbH",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "November 2020 – May 2021",
      desc: "Infinite Devices is a German start-up that strives to revolutionize the IoT market. Our infinimesh IoT platform creates the backbone for the communication of millions of IoT devices. infinimesh is unique in that it provides fast, highly-scalable, and secure connectivity and handles the data processing for IoT fleets and spheres of any size at low costs. Hosted in Germany, infinimesh fully complies with the GDPR requirements.",
      descBullets: [
        "Implement and improve monitoring and alerting.",
        "Build and maintain highly available systems on Kubernetes.",
        "Implement and manage CI/CD pipelines.",
        "Implement an auto-scaling system for our Kubernetes nodes.",
        "Participate in on-call rotations.",
        "Developing Application and fix issues in Golang."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Securiti.ai",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Feb 2019 – Nov 2020",
      desc: "SECURITI.ai is an innovator of AI-Powered cybersecurity and data protection solutions. Its product-suite, PRIVACI.ai is the world’s first PrivacyOps platform that helps automate all major functions needed for privacy compliance in one place. It enables enterprises to give rights to people on their data, be responsible custodians of people’s data, comply with global privacy regulations and bolster their brands. For more information, please visit www.privaci.ai.",
      descBullets: [
        "Developing/Managing Python Microservices and Middlewares.",
        "Research and analysis of cybersecurity regulatory compliances and frameworks.",
        "Bash Scripting and expertise on tools like Dockers etc."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OPEN SOURCE PROJECTs I AM WORKING ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.png"),
      projectName: "Openshift",
      projectDesc: "Red Hat OpenShift Container Platform",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/openshift/installer"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/quoraLogo.png"),
      projectName: "Infinimesh-Operator",
      projectDesc: "Kubernetes Operator - Automating the Container Orchestration Platform",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/InfiniteDevices/operator"
        }
      ]
    },
    {
      image: require("./assets/images/quoraLogo.png"),
      projectName: "Infinimesh",
      projectDesc: "Web Application Developed in Golang",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/InfiniteDevices/infinimesh"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Awards and Badges",
      subtitle:
        "Awards and Badges",
      image: require("./assets/images/codeInLogo.png"),
      footerLink: [
        {
          name: "Web Development Competition at Developers Day FAST NUCES 2017",
          url: "https://i.ibb.co/r6hLRZd/scan0003-page-001.jpg"
        },
        {
          name: "Bertelsmann Data Science Challenge Scholarship Online Course on Udacity",
          },
        {
          name: "Gold Badge Python - Hackerrank",
          url: "https://www.hackerrank.com/akaleem306"
        }
      ]
    },
    {
      title: "Participations and Self Learning",
      subtitle:
        "Certificate of Participations and Self Learning",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View the Certificates",
          url: "https://ibb.co/album/d6y05a"
        }
      ]
    },

    {
      title: "Licenses & Certifications",
      subtitle: "Licenses & Certifications",
      image: require("./assets/images/pwaLogo.jpeg"),
      footerLink: [
        {
          name: "Self Learning Certifications",
          url: "https://ibb.co/album/hFChJv"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
   ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "akaleem306@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Ayesha546", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
