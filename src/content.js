import eduImg from './assets/ut-austin-tx.jpeg';
import aboutEdu from './assets/about--education.png';
import aboutResearch from './assets/about--research.png';
import aboutAwards from './assets/about--award.png';
import aboutLeadership from './assets/about--leader.png';
import aboutInternship from './assets/about--work.png';

import workImg from './assets/newport-ri.jpg';
import aboutSummary from './assets/about--work-summary.png';
import aboutWorkAwards from './assets/about--award.png';
import aboutSkills from './assets/about--skills.png';

import learningImg from './assets/raleigh-nc.jpeg';
import aboutUXCert from './assets/about--ux-certificate.png';
import aboutFrontendCert from './assets/about--frontend-certificate.png';
import aboutUTUXCert from './assets/about--utux-certificate.png';
import aboutFrontendMentor from './assets/about--frontend-mentor.png';
import aboutUdemyReact from './assets/about--udemy-react.png';

import portfolioMockUp from './assets/case-study--portfolio.png';
import portfolioHomepage from './assets/case-study--portfolio-homepage.png';
import portfolioHomepageFull from './assets/case-study--portfolio-homepage-full.png';
import portfolioAbout from './assets/case-study--portfolio-about.png';
import portfolioCaseStudyPage from './assets/case-study--portfolio-case-study.png';
import portfolioErrorPage from './assets/case-study--portfolio-error-page.png';
import countriesMockUp from './assets/case-study--country-picker.png';
import countriesHomepage from './assets/case-study--country-picker-homepage-dark.png';
import countriesHomepageL from './assets/case-study--country-picker-homepage-light.png';
import countriesSearch from './assets/case-study--country-picker-search-dark.png';
import countriesSearchL from './assets/case-study--country-picker-search-light.png';
import countriesDetails from './assets/case-study--country-picker-details-dark.png';
import countriesDetailsL from './assets/case-study--country-picker-details-light.png';
import lemonMockUp from './assets/case-study--little-lemon.png';
import lemonHomepage from './assets/case-study--little-lemon-homepage.png';
import lemonBookingPage from './assets/case-study--little-lemon-booking-page.png';
import lemonConfirmationPage from './assets/case-study--little-lemon-confirmation-page.png';

import foodOrderingMockUp from './assets/case-study--food-ordering.png';
import foodOrderingHomepage from './assets/case-study--food-ordering-homepage.png';
import foodOrderingCart from './assets/case-study--food-ordering-cart.png';
import foodOrderingForm from './assets/case-study--food-ordering-form.png';
import foodOrderingConfirmation from './assets/case-study--food-ordering-confirmation.png';
import placepickerMockUp from './assets/case-study--placepicker.png';
import placepickerLoading from './assets/case-study--placepicker-loading.png';
import placepickerHomepage from './assets/case-study--placepicker-homepage.png';
import placepickerAdd from './assets/case-study--placepicker-add-places.png';
import placepickerRemove from './assets/case-study--placepicker-remove-places.png';
import ticTacToeMockUp from './assets/case-study--tic-tac-toe.png';
import ticTacToeHomepage from './assets/case-study--tic-tac-toe-homepage.png';
import ticTacToeGame from './assets/case-study--tic-tac-toe-active-game.png';
import ticTacToeEnd from './assets/case-study--tic-tac-toe-gameover.png';

// About Content
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
        altText: "Freepik icon of a graduation cap, representing a degree earned.",
        title: 'B.S. Mechanical Engineering',
        description: 'Graduated from The University of Texas at Austin in 2018 with a Bachelor of Science in Mechanical Engineering and a Business Foundations Certificate. Earned a 3.61 GPA with coursework that included Programming & Engineering Computational Methods among other technical courses.',
        takeaways: 'In tackling a robust engineering curriculum, I built confidence in efficiently learning new skills. When faced with new or challenging problems, I lean into my experience in technical problem-solving to design and deliver quality solutions.',
      },
      {
        id: 'eduResearch',
        caption: '4 Research Projects',
        icon: aboutResearch,
        altText: "Freepik icon of a magnifying glass, representing research projects completed.",
        title: 'Research Projects',
        description: "Designed, built, and tested prototypes for four university research projects. These projects included an assistive gripping device for people with spinal cord injuries, an autonomous vehicle controller for warehouse navigation, a fire search-and-rescue robot, and a trash compactor for refugees in underserved communities.",
        takeaways: 'For two of these projects, I taught myself how to code and troubleshoot Arduino boards to meet project objectives. And, with extensive experience working on project teams, I learned how to deliver value throughout all stages of the design process.',
      },
      {
        id: 'eduAwards',
        caption: '4 Academic Awards',
        icon: aboutAwards,
        altText: "Freepik icon of an award, representing academic awards earned.",
        title: 'Awards',
        description: "Earned University Honors for multiple semesters with a GPA over 3.5, awarded two university scholarships for academic achievements in mechanical engineering, and recognized as an Academic All-American for having a GPA over 3.7 at the women's club lacrosse national tournament.",
        takeaways: 'These honors highlight my consistency in setting high personal standards and balancing simultaneous activities. I am self-motivated and can be counted on to always put my best work forward.',
      },
      {
        id: 'eduLeadership',
        caption: '2 Leadership Roles',
        icon: aboutLeadership,
        altText: "Freepik icon of a leader, representing leadership roles undertaken.",
        title: 'Leadership',
        description: "Led a senior capstone project team of four mechanical engineers to design a trash compactor for the Red Cross and Red Crescent Society, and served as President of the Texas Women's Lacrosse Club for my final year with the team.",
        takeaways: "In addition to leading a design team, I learned how to effectively lead larger teams with a variety of stakeholders. As lacrosse president, I balanced internal and external communications to deliver a seamless season and achieve our team's annual goals.",
      },
      {
        id: 'eduInternship',
        caption: '1 Internship',
        icon: aboutInternship,
        altText: "Freepik icon of a briefcase, representing internships worked.",
        title: 'ARL: UT Internship',
        description: 'Used MATLAB and Python to integrate vehicle dynamics and troubleshoot known bugs in an AUV run simulator for The Applied Research Laboratories: UT. Delivered a functional program for conducting simulations of vehicle behaviors in untested conditions.',
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
        altText: "Freepik icon of a report page, representing a summary of work experience.",
        title: 'Summary',
        description: 'Led and contributed to the mechanical design of 10+ projects, including established fleet-integrated systems, prototype unmanned underwater vehicles, and laboratory proof-of-concept experiments. Gained invaluable experience in collaborating on cross-functional teams and learning from true experts in their fields.',
        takeaways: 'As a mechanical designer, I routinely initiated design reviews with the machinists who would be manufacturing my parts. Drawing a parallel to the working relationship between UX designers and software developers, I understand and embrace the cost- and time-saving benefits of addressing potential trade-offs early in the design process.',
      },
      {
        id: 'workAwards',
        caption: 'Awards',
        icon: aboutWorkAwards,
        altText: "Freepik icon of an award, representing work awards earned.",
        title: 'Awards',
        description: 'Awarded the annual Outstanding New Employee Award in 2019, which is "presented to an entry- or intermediate-level professional who demonstrates excellence and whose growth far exceeds the normal expectations of an employee with the time in grade."',
        takeaways: 'While working for 5+ years at NUWC, I received feedback from colleagues and supervisors commending my technical skill, receptiveness to feedback, and overall dependability. My reputation as a skilled designer and an active listener repeatedly yielded new and exciting opportunities.',
      },
      {
        id: 'workSkills',
        caption: 'Transferrable Skills',
        icon: aboutSkills,
        altText: "Freepik icon of a crossed pencil and wrench, representing skills gained.",
        title: 'Skills',
        description: 'Developed numerous skills from working as a mechanical engineer that translate well into a software development role, including collaborating on multidisciplinary teams, iterating on designs, and integrating deliverables into larger systems.',
        takeaways: 'Given my professional background, I bring a unique set of experiences in engineering and problem-solving to the software development field. Even early in my career as a mechanical engineer, I offered a fresh perspective to my project teams that promoted new ideas over routine solutions.',
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
        altText: "Freepik icon of a certificate, representing a professional certificate earned from Google.",
        title: 'Google UX Design Certificate',
        description: 'Gained foundational knowledge of user-experience design and executing the design process for digital products. Learned new techniques and resources for user research, designing for accessibility, creating wireframes, and building high-fidelity prototypes in Figma.',
        takeaways: 'This program cemented the importance of designing for accessibility and focusing on the user throughout the design process. Beyond learning the role of a UX designer, I also gained key insights into how UX designers and front-end developers work together to build useful and enjoyable websites.',
      },
      {
        id: 'learnMetaFE',
        caption: 'Meta Front-End Developer',
        icon: aboutFrontendCert,
        altText: "Freepik icon of a certificate, representing a professional certificate earned from Meta.",
        title: 'Meta Front-End Developer Certificate',
        description: 'Developed essential skills for success in a front-end software engineering role. Learned how to build responsive websites with HTML and CSS, create interactive experiences with JavaScript and React.js, conduct unit testing with Jest and React Testing Library, and manage code revisions with GitHub repositories.',
        takeaways: "After completing this course's capstone project, I gained confidence in my ability and decision to transition into software development. I grew excited to continue learning React to develop responsive, interactive experiences.",
      },
      {
        id: 'learnUTUX',
        caption: 'UT Austin UX Design',
        icon: aboutUTUXCert,
        altText: "Freepik icon of a certificate, representing a professional certificate earned from The University of Texas at Austin.",
        title: 'Post Graduate Program in UX Design',
        description: 'Solidified user experience design concepts with projects in conducting user research, conducting competitive audits, and redesigning websites. Collaborated with four other designers to plan out a pet health-tracking mobile app and present our concept to other peers and mentors of the program.',
        takeaways: 'This experience afforded me an additional perspective on the UX Design field. I became more efficient using to Figma plan out web designs, and I learned about current design trends like inclusion of micro-animations, minimalism, and dark mode.',
      },
      {
        id: 'learnFEM',
        caption: 'Frontend Mentor',
        icon: aboutFrontendMentor,
        altText: "Freepik icon of a multiple-sized screens, representing responsive website design projects from Frontend Mentor.",
        title: 'FrontEnd Mentor Challenges',
        description: 'Practiced building web pages with HTML, CSS, Tailwind CSS, JavaScript, React.js, and Styled Components. Exercised design best practices using semantic HTML and flexboxes for building accessible, responsive web elements.',
        takeaways: 'Through building out these projects, I pushed myself to try out different third-party libraries and put all I have learned into practice. I am very proud of my advanced country-picker webpage, where I practiced making API calls and learned how to create new components like search bars and filter elements.',
      },
      {
        id: 'learnUdemy',
        caption: 'Udemy React',
        icon: aboutUdemyReact,
        altText: "Freepik icon of a multiple-sized screens, representing React projects from React: The Complete Guide 2024.",
        title: 'React: The Complete Guide 2024',
        description: "Built upon React.js foundational knowledge, learning advanced React concepts and embracing best practices through dozens of hands-on exercises. Gained a deeper understanding of the innerworkings of React and how to structure React projects.",
        takeaways: 'I am continuing to boost my technical skills with this course by developing apps with advanced state management, authentication, animations, and HTTP requests. Currently making advancements on learning Next.js to develop fullstack applications.',
      },
    ],
  },
}

// Project Case Studies

export const portfolio = {
  type: "project",
  linkUrl: "/portfolio/",
  cardImg: portfolioHomepage,
  cardAlt: "Personal portfolio website screenshot",
  cardTitle: "Portfolio",
  cardDescription: "A responsive, interactive portfolio website highlighting personal growth as a designer and software developer.",
  caseStudyTitle: "Portfolio Case Study",
  tagLine: 'An interactive personal portfolio that showcases my skills as a front-end software developer.',
  objective: 'Design and build an engaging portfolio website that allows users to:',
  requirements: [
    'See "Hero", "Projects", "Exercises", and "About" sections on the homepage.',
    'Use links in the header and footer to navigate to their respective content sections.',
    'View individual project and exercise case studies via their links on the homepage.',
    'Interact with education, work experience, and continuous learning content in the "About" section.',
    'Connect via the LinkedIn and GitHub links in the footer section.'
  ],
  learnings: [
    {
      title: 'Ensure the site is enjoyable and functional across browsers and devices.',
      insight: 'With a wide variety of screen and browser options for visiting a webpage, responsive web design is critical for delivering an uncompromised user experience across all viewports. To mitigate potential compatibility issues, I tested my application early and often on multiple browsers and devices, using browser dev tools to help identify and fix problems along the way. Additionally, I verified that all functionality is accessible via keyboard navigation and non-text content includes text alternatives to promote inclusivity of all abilities and assistive devices.',
    },
    {
      title: 'Outsource content details to a separate file (content.js).',
      insight: 'Moving data out of individual pages and component files leads to leaner components, improves ease of making formatting changes and adding new content, and reduces time spent on debugging across multiple layers of a file structure. Having created reusable elements for the "About" section and case study page, I can easily add topics or swap out case studies without needing to manipulate any components or add any pages.',
    },
    {
      title: "Improve browser-routing with React-Router-DOM",
      insight: "To integrate the reusable case study page as a child path, I wrapped the browser router with context and utilized the useParams hook to make page connections, load the correct data, and prevent refresh errors. While building out this project, I enjoyed picking up new experiences in structuring SPAs, creating custom 404 error pages, and scrolling to different elements on a page with links. Looking forward to learning more about React router components and hooks for future projects.",
    },
    {
      title: "Incorporate animations, effects, and a custom error page",
      insight: "To make this portfolio website fun and engaging, I added animations to highlight hovered/focused elements, applied smooth transitions to scrolling and user-selected components, and created a custom 404 error page. For animations, I tried out motion components from the Framer Motion library to style elements entering the viewport and enhance the feel of interactive elements.",
    },
  ],
  image: portfolioMockUp,
  altText: "Laptop mock-up of final portfolio design.",
  screenshots: [
    portfolioHomepageFull,
    portfolioAbout,
    portfolioCaseStudyPage,
    portfolioErrorPage,
  ],
  repoLink: "https://github.com/mjclaypool/Personal-Portfolio",
}

export const countryPicker = {
  type: "project",
  linkUrl: "/country-picker/",
  cardImg: countriesHomepage,
  cardAlt: "Country-Picker web application screenshot",
  cardTitle: "Country-Picker App",
  cardDescription: "A country-picking app that pulls and displays country data from the REST Countries API.",
  caseStudyTitle: "Country-Picker Case Study",
  tagLine: 'An interactive country-picker application that pulls country data from ',
  objective: 'Per the design brief from Frontend Mentor, build a webpage that allows users to:',
  requirements: [
    'See all countries from the API on the homepage.',
    'Search for a country using an input field.',
    'Filter countries by region.',
    'Click on a country to see more detailed information on a separate page.',
    'Click through to the border countries on the detail page.',
    "View the optimal layout for the interface depending on their device's screen size.",
    'See hover and focus states for all interactive elements on the page.',
  ],
  learnings: [
    {
      title: 'Seamlessly execute REST API calls',
      insight: "Used Fetch API to asynchronously perform GET requests from REST Countries API endpoints, and managed side-effects with the useEffect hook. The first request retrieves a subset of country data to populate the cards on the main page. The second request is triggered whenever a country is selected by the user, retrieving and displaying in-depth country details on that country's page."
    },
    {
      title: "Build cohesive search bar and filter drop-down elements",
      insight: "Applied the useContext and useReducer hooks from React to display countries by region and/or keystrokes in the search bar. Since both functionalities tap into a shared state, the user is able search and filter countries by region simultaneously. Additionally, this shared state persists after the user navigates to a country's details page, so the user will return to the previous search/filter results when the back button is clicked. By choosing to manage state with context, I streamlined state-sharing among sibling components, prevented any consideration of prop-drilling in the solution, and improved the user's experience by keeping track of their inputs.",
    },
    {
      title: 'Incorporate Tailwind CSS styling',
      insight: 'Practiced using the popular CSS framework, Tailwind CSS, to bolster maintainability and speed of implementing future updates. Gained experience using responsive utility variants, and looking forward to learning more about directives and reusing styles.'
    },
  ],
  image: countriesMockUp,
  altText: "Laptop mock-up of country-picker design.",
  screenshots: [
    countriesHomepage,
    countriesSearch,
    countriesDetails,
    countriesHomepageL,
    countriesSearchL,
    countriesDetailsL,
  ],
  repoLink: "https://github.com/mjclaypool/Frontend-Mentor-Challenges/tree/main/rest-countries-api-with-color-theme-switcher-master",
}

export const littleLemon = {
  type: "project",
  linkUrl: "/little-lemon/",
  cardImg: lemonHomepage,
  cardAlt: "Little Lemon restaurant website screenshot.",
  cardTitle: "Little Lemon Website",
  cardDescription: "A responsive website for a fictional medeterranean restaurant with table-booking functionality.",
  caseStudyTitle: "Little Lemon Case Study",
  tagLine: "Addition of table-booking functionality to a fictional Mediterranean restaurant's website.",
  objective: 'Provided with a UI kit, build a Little Lemon restaurant website that empowers users to:',
  requirements: [
    'Navigate to the "Reserve a Table" page via the navigation bar, footer, and respective CTA on the homepage.',
    'Select a date, time, number of guests, and occasion for making a reservation.',
    'Choose a time from date-specific availability, which shall be randomly generated by an API-like script.',
    'Receive useful error messages (if applicable) via client-side form validation.',
    'Obtain a reservation summary upon successful form submission.',
    'See hover and focus states for all interactive elements on the page.',
  ],
  learnings: [
    {
      title: "Integrate browser-routing with React-Router-DOM",
      insight: "I relied on a combination of BrowserRouter, Routes, Route, useNavigate, and useLocation to build this single-page application. This was my first attempt at routing pages, and I have since adopted a more streamlined and readable approach to browser-routing with createBrowserRouter, RouterProvider, Link, and NavLink.",
    },
    {
      title: "Develop useful client-side form validation",
      insight: "Setting users up for success with informative error messages prevents frustration and improves the overall user experience. With any form's development, I make sure users are guided towards valid inputs with straightforward and specific error messages and not bothered with errors on individual keystrokes.",
    },
    {
      title: "Use the useReducer Hook",
      insight: "I used the useReducer hook to update the available times state for booking on any chosen date. I learned that useReducer is a powerful hook for handling more complicated state management than would otherwise be handled by useState.",
    },
    {
      title: "Build tests with React-Testing-Library",
      insight: "This project introduced me to writing unit tests for React components, mirroring the declarative nature of programming in React by focusing on testing the UI. Although there is still a lot of room for me to grow is this area, I appreciate the importance of unit testing throughout the software development process. I look forward to exploring other testing frameworks like Playwright for future projects.",
    },
  ],
  image: lemonMockUp,
  altText: "Laptop mock-up of the Little Lemon restaurant website.",
  screenshots: [
    lemonHomepage,
    lemonBookingPage,
    lemonConfirmationPage,
  ],
  repoLink: "https://github.com/mjclaypool/Restaurant-Booking-Project",
}


// Exercise Case Studies

export const foodOrderingApp = {
  type: "exercise",
  linkUrl: "/food-ordering-app/",
  cardImg: foodOrderingHomepage,
  cardAlt: "Food ordering app screenshot.",
  cardTitle: "Food Ordering App",
  cardDescription: "A food ordering app that populates selected foods, quantities, and prices in a cart for checkout.",
  caseStudyTitle: "Food Ordering App Exercise",
  tagLine: "A React exercise on sending HTTP Requests, building Modals, using Context, and creating custom hooks.",
  objective: "Provided with a dummy backend and CSS styling, build a food-ordering app that allows users to:",
  requirements: [
    'Add dishes to a virtual cart by clicking "Add to Cart" CTAs on menu items.',
    'See a count of dishes in the cart displayed on the homepage cart button.',
    'View an accurate cart summary when the cart button is clicked.',
    'Fill out a checkout form when the "Go to Checkout" CTA is clicked.',
    'See useful error messages if the form is incorrectly completed.',
    'Receive an order confirmation when the form is successfully submitted to the dummy backend.'
  ],
  outcomes: "Over the course of this exercise, I further developed my coding skills by practicing:",
  learnings: [
    'Sending HTTP Requests',
    'Building reusable modal components',
    'Handling form submission and validation',
    'Using context to share state data',
  ],
  image: foodOrderingMockUp,
  altText: "Laptop mock-up of the food ordering app.",
  screenshots: [
    foodOrderingHomepage,
    foodOrderingCart,
    foodOrderingForm,
    foodOrderingConfirmation,
  ],
  repoLink: "https://github.com/mjclaypool/Udemy-React-Projects/tree/main/18_Food-Order-App",
}

export const placepicker = {
  type: "exercise",
  linkUrl: "/place-picker/",
  cardImg: placepickerHomepage,
  cardAlt: "Place-picking app screenshot.",
  cardTitle: "Place-Picker App",
  cardDescription: "A place-picking app that sorts available places by geolocation and stores selected place cards.",
  caseStudyTitle: "Place-Picker Exercise",
  tagLine: "A React exercise on handling side effects, sending HTTP Requests, and using async/await.",
  objective: "Provided with a dummy backend and CSS styling, build a place-picking app that allows users to:",
  requirements: [
    'See available places sorted by distance to the user and loaded from a dummy backend.',
    'Click places in the "Available places" section to move into the "I would like to visit..." section.',
    'Click places in the "I would like to visit..." section to remove them from the section.',
    'See a loading message while the application fetches data from the backend, and see an error message if it fails to fetch.',
  ],
  outcomes: "Over the course of this exercise, I further developed my coding skills by practicing:",
  learnings: [
    'Fetching data from a dummy backend API',
    'Defining asynchronous functions',
    'Handling side-effects and HTTP errors',
    'Employing optimistic UI updating',
  ],
  image: placepickerMockUp,
  altText: "Laptop mock-up of place-picking app.",
  screenshots: [
    placepickerLoading,
    placepickerHomepage,
    placepickerAdd,
    placepickerRemove,
  ],
  repoLink: "https://github.com/mjclaypool/Udemy-React-Projects/tree/main/15_HTTP-PlacePicker",
}

export const tictactoe = {
  type: "exercise",
  linkUrl: "/tic-tac-toe/",
  cardImg: ticTacToeHomepage,
  cardAlt: "Tic-Tac-Toe game screenshot.",
  cardTitle: "Tic-Tac-Toe Game",
  cardDescription: "A standard, two-player tic-tac-toe game.",
  caseStudyTitle: "Tic-Tac-Toe Exercise",
  tagLine: "An early React exercise on writing JSX code, building components, and managing state with hooks.",
  objective: "Provided with CSS styling, build a Tic-Tac-Toe game that allows the user to:",
  requirements: [
    'Rename "Player 1" and "Player 2" to the desired player name.',
    'Determine which player is active at any moment in the game.',
    'See a game summary when either a player wins or the game ends in a draw.',
  ],
  outcomes: "Over the course of this exercise, I further developed my coding skills by practicing:",
  learnings: [
    'Building reusable components',
    'Managing state with the useState hook',
    'Using props and lifting state up',
  ],
  image: ticTacToeMockUp,
  altText: "Laptop mock-up of the Tic-Tac-Toe game.",
  screenshots: [
    ticTacToeHomepage,
    ticTacToeGame,
    ticTacToeEnd,
  ],
  repoLink: "https://github.com/mjclaypool/Udemy-React-Projects/tree/main/4_Tic-Tac-Toe",
}