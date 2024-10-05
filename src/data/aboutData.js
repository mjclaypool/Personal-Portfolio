import eduImg from '../assets/ut-austin-tx.jpeg';
import aboutEdu from '../assets/about--education.png';
import aboutResearch from '../assets/about--research.png';
import aboutAwards from '../assets/about--award.png';
import aboutLeadership from '../assets/about--leader.png';
import aboutInternship from '../assets/about--work.png';

import workImg from '../assets/newport-ri.jpg';
import aboutSummary from '../assets/about--work-summary.png';
import aboutWorkAwards from '../assets/about--award.png';
import aboutSkills from '../assets/about--skills.png';

import learningImg from '../assets/raleigh-nc.jpeg';
import aboutUXCert from '../assets/about--ux-certificate.png';
import aboutFrontendCert from '../assets/about--frontend-certificate.png';
import aboutUTUXCert from '../assets/about--utux-certificate.png';
import aboutFrontendMentor from '../assets/about--frontend-mentor.png';
import aboutUdemyReact from '../assets/about--udemy-react.png';

export const ABOUTTAB = {
  edu: {
    title: 'The University of Texas at Austin',
    dates: '2014 - 2018',
    image: eduImg,
    imageAlt: 'Image of the 360 Bridge in Austin, TX USA.',
    buttons: [
      {
        id: 'eduDegree',
        caption: 'B.S. Mechanical Engineering',
        icon: aboutEdu,
        altText: "Degree icon",
        title: 'B.S. Mechanical Engineering',
        description: 'Graduated from The University of Texas at Austin in 2018 with a Bachelor of Science in Mechanical Engineering and a Business Foundations Certificate. Earned a 3.61 GPA with coursework that included Programming & Engineering Computational Methods among other technical courses.',
        takeaways: 'In tackling a robust engineering curriculum, I built confidence in efficiently learning new skills. When faced with new or challenging problems, I lean into my experience in technical problem-solving to design and deliver quality solutions.',
      },
      {
        id: 'eduResearch',
        caption: '4 Research Projects',
        icon: aboutResearch,
        altText: "Research icon",
        title: 'Research Projects',
        description: "Designed, built, and tested prototypes for four university research projects. These projects included an assistive gripping device for people with spinal cord injuries, an autonomous vehicle controller for warehouse navigation, a fire search-and-rescue robot, and a trash compactor for underserved communities.",
        takeaways: 'For two of these projects, I taught myself how to code and troubleshoot Arduino boards to meet project objectives. And, with extensive experience working on project teams, I learned how to collaborate effectively and deliver value throughout all stages of the design process.',
      },
      {
        id: 'eduAwards',
        caption: '4 Academic Awards',
        icon: aboutAwards,
        altText: "Awards icon",
        title: 'Awards',
        description: "Earned University Honors for multiple semesters with a GPA over 3.5, awarded two university scholarships for academic achievements in mechanical engineering, and recognized as an Academic All-American for having a GPA over 3.7 at the women's club lacrosse national tournament.",
        takeaways: 'These honors highlight my consistency in setting high personal standards and balancing simultaneous activities. I am self-motivated and can be counted on to always put my best work forward.',
      },
      {
        id: 'eduLeadership',
        caption: '2 Leadership Roles',
        icon: aboutLeadership,
        altText: "Leadership icon",
        title: 'Leadership',
        description: "Led a senior capstone project team of four mechanical engineers to design a trash compactor for the Red Cross and Red Crescent Society, and served as President of the Texas Women's Lacrosse Club in my second year with the team.",
        takeaways: "In addition to leading a design team, I learned how to effectively lead larger teams with a variety of stakeholders. As lacrosse president, I balanced internal and external communications to deliver a seamless season for our players and achieve all of our team's annual goals.",
      },
      {
        id: 'eduInternship',
        caption: '1 Internship',
        icon: aboutInternship,
        altText: "Work icon",
        title: 'ARL: UT Internship',
        description: 'Used MATLAB and Python to integrate vehicle dynamics and troubleshoot known bugs in an autonomous underwater vehicle (AUV) run simulator. Delivered a functional program for conducting simulations of vehicle behaviors in untested conditions.',
        takeaways: 'For this internship, I tapped into my knowledge of other programming languages to learn and code in Python. With a foundation dating back to AP Computer Science in high school, I am confident in my ability to quickly learn new languages and effectively put them into practice.',
      },
    ],
  },
  work: {
    title: 'Naval Undersea Warefare Center Division Newport',
    dates: '2018 - 2023',
    image: workImg,
    imageAlt: 'Image from the Cliff Walk in Newport, RI USA.',
    buttons: [
      {
        id: 'workSummary',
        caption: 'Summary',
        icon: aboutSummary,
        altText: "Experience icon",
        title: 'Summary',
        description: 'Led and contributed to the mechanical design of 10+ projects, including established fleet-integrated systems, prototype unmanned underwater vehicles, and laboratory proof-of-concept experiments. Gained invaluable experience in collaborating on cross-functional teams and learning from true experts in their fields.',
        takeaways: 'In the early stages of every project, I routinely initiated design reviews with the shop engineers and machinists that would be manufacturing my parts. From these experiences, I gained a strong appreciation for the cost- and time-saving benefits of addressing potential trade-offs early in the design process.',
      },
      {
        id: 'workAwards',
        caption: 'Awards',
        icon: aboutWorkAwards,
        altText: "Awards icon",
        title: 'Awards',
        description: 'Awarded the annual Outstanding New Employee Award in 2019, which is "presented to an entry- or intermediate-level professional who demonstrates excellence and whose growth far exceeds the normal expectations of an employee with the time in grade."',
        takeaways: 'While working for 5+ years at NUWC, I received feedback from colleagues and supervisors commending my technical skill, receptiveness to feedback, and overall dependability. My reputation as a skilled designer and an active listener repeatedly yielded new and exciting opportunities.',
      },
      {
        id: 'workSkills',
        caption: 'Transferrable Skills',
        icon: aboutSkills,
        altText: "Skills icon",
        title: 'Skills',
        description: 'Developed numerous skills from working as a mechanical engineer that translate well into a software development role, including collaborating on multidisciplinary teams, iterating on designs, and integrating deliverables into larger systems.',
        takeaways: 'Given my professional background, I bring a unique set of experiences in engineering and problem-solving to the software development field. Even early in my career as a mechanical engineer, I was commended for my creativity in finding new solutions to old problems.',
      },
    ],
  },
  learning: {
    title: 'Professional Development',
    dates: '2023 - present',
    image: learningImg,
    imageAlt: 'Image of the sky from within a forest near Raleigh, NC USA.',
    buttons: [
      {
        id: 'learnGoogleUX',
        caption: 'Google UX Design',
        icon: aboutUXCert,
        altText: "Certificate icon",
        title: 'Google UX Design Certificate',
        description: 'Gained foundational knowledge of user-experience design and executing the design process for digital products. Learned new techniques and resources for user research, designing for accessibility, creating wireframes, and building high-fidelity prototypes in Figma.',
        takeaways: 'This program cemented the importance of designing for accessibility and focusing on the user throughout the design process. Beyond learning the role of a UX designer, I also gained key insights into how UX designers and front-end developers work together to build useful and enjoyable websites.',
      },
      {
        id: 'learnMetaFE',
        caption: 'Meta Front-End Developer',
        icon: aboutFrontendCert,
        altText: "Certificate icon",
        title: 'Meta Front-End Developer Certificate',
        description: 'Developed essential skills for success in a front-end software engineering role. Learned how to build responsive websites with HTML and CSS, create interactive experiences with JavaScript and React.js, conduct unit testing with Jest and React Testing Library, and manage code revisions with GitHub repositories.',
        takeaways: "After completing this course's capstone project, I gained confidence in my ability and decision to transition into software development. I grew excited to continue learning React to develop responsive, interactive experiences.",
      },
      {
        id: 'learnUTUX',
        caption: 'UT Austin UX Design',
        icon: aboutUTUXCert,
        altText: "Certificate icon",
        title: 'Post Graduate Program in UX Design',
        description: 'Solidified user experience design concepts with projects in conducting user research, conducting competitive audits, and redesigning websites. Collaborated with four other designers to plan out a pet health-tracking mobile app and present our concept to other peers and mentors of the program.',
        takeaways: 'This experience afforded me an additional perspective on the UX Design field. I became more efficient using Figma to plan out web designs, and I learned more about current design trends and best practices.',
      },
      {
        id: 'learnFEM',
        caption: 'Frontend Mentor',
        icon: aboutFrontendMentor,
        altText: "Development icon",
        title: 'FrontEnd Mentor Challenges',
        description: 'Gained hands-on experience building accessible, responsive web applications in a professional workflow. Practiced building and deploying websites with a variety of languages and libraries, gravitating towards TypeScript, React.js, semantic HTML and Tailwind CSS.',
        takeaways: 'Through building out these projects, I pushed myself to routinely try out new libraries and practice writing efficient, reusable code. I am particularly proud of my latest two projects, the Personal Finance App and the Audiophile Website, both of which I was able to develop and deploy with about one week\'s time.',
      },
      {
        id: 'learnUdemy',
        caption: 'Udemy React',
        icon: aboutUdemyReact,
        altText: "Development icon",
        title: 'React: The Complete Guide 2024',
        description: "Built upon React.js foundational knowledge, learning advanced React concepts and embracing best practices through dozens of hands-on exercises. Gained a deeper understanding of the innerworkings of React and how to structure React projects.",
        takeaways: 'I am continuing to boost my technical skills with this course by developing apps with advanced state management, authentication, animations, and API calls. Currently making advancements on learning Next.js to develop fullstack applications.',
      },
    ],
  },
}