import { useState, createContext, PropsWithChildren } from "react";
import projects from "../data/projectData.json";
import aboutTabs from "../data/aboutData.json";

type projData = {
  id: string,
  cardImg: string,
  cardAlt: string,
  cardTitle: string,
  cardDescription: string,
  caseStudyTitle: string,
  tagLine: string,
  objective: string,
  requirements: string[],
  learnings: {
    title: string;
    insight: string;
  }[],
  image: string,
  altText: string,
  screenshots: string[],
  repoLink: string,
  liveLink: string,
}

type aboutButton = {
  id: string,
  caption: string,
  icon: string,
  altText: string,
  title: string,
  description: string,
  takeaways: string
}

type aboutData = {
  tabName: string,
  title: string,
  dates: string,
  image: string,
  imageAlt: string,
  buttons: aboutButton[]
}

interface CaseStudyContextType {
  caseStudy: projData,
  projects: projData[],
  aboutTabs: aboutData[],
  activeTab: aboutData,
  activeButton: aboutButton,
  changeActiveTab: (tab: string) => void,
  changeActiveButton: (buttonId: string) => void,
  resetActiveButton: () => void,
  showCaseStudy: (caseStudy: string) => void
}

const CaseStudyContext = createContext<CaseStudyContextType>({
  caseStudy: {
    id: "",
    cardImg: "",
    cardAlt: "",
    cardTitle: "",
    cardDescription: "",
    caseStudyTitle: "",
    tagLine: "",
    objective: "",
    requirements: [],
    learnings: [],
    image: "",
    altText: "",
    screenshots: [],
    repoLink: "",
    liveLink: "",
  },
  projects: [],
  aboutTabs: [],
  activeTab: {
    tabName: "",
    title: "",
    dates: "",
    image: "",
    imageAlt: "",
    buttons: []
  },
  activeButton: {
    id: "",
    caption: "",
    icon: "",
    altText: "",
    title: "",
    description: "",
    takeaways: ""
  },
  changeActiveButton: () => {},
  changeActiveTab: () => {},
  resetActiveButton: () => {},
  showCaseStudy: () => {},
})

export function CaseStudyContextProvider({children} : PropsWithChildren) {
  const [caseStudy, setCaseStudy] = useState({
    id: "",
    cardImg: "",
    cardAlt: "",
    cardTitle: "",
    cardDescription: "",
    caseStudyTitle: "",
    tagLine: "",
    objective: "",
    requirements: [""],
    learnings: [{title: "", insight: ""}],
    image: "",
    altText: "",
    screenshots: [""],
    repoLink: "",
    liveLink: "",
  });
  const [activeTab, setActiveTab] = useState(aboutTabs[0]);
  const [activeButton, setActiveButton] = useState({
    id: "",
    caption: "",
    icon: "",
    altText: "",
    title: "",
    description: "",
    takeaways: ""
  });

  function setCaseStudyError() {
    setCaseStudy({
      id: "error",
      cardImg: "",
      cardAlt: "",
      cardTitle: "",
      cardDescription: "",
      caseStudyTitle: "",
      tagLine: "",
      objective: "",
      requirements: [""],
      learnings: [{title: "", insight: ""}],
      image: "",
      altText: "",
      screenshots: [""],
      repoLink: "",
      liveLink: "",
    })
  }

  function showCaseStudy(caseStudyURL: string) {
    const selectedProj = projects.filter((project) => project.id == caseStudyURL);
    if (selectedProj.length > 0 && selectedProj[0].id && selectedProj[0].id.length > 0) {
      setCaseStudy(selectedProj[0]);
    } else {
      setCaseStudyError();
    }
  }

  function resetActiveButton() {
    setActiveButton({
      id: "",
      caption: "",
      icon: "",
      altText: "",
      title: "",
      description: "",
      takeaways: ""
    })
  }

  function changeActiveTab(tab: string) {
    const newTab = aboutTabs.filter((aboutTab) => aboutTab.tabName === tab)
    if (tab != activeTab.tabName) {
      setActiveTab(newTab[0])
      resetActiveButton()
    }
  }

  function changeActiveButton(buttonId: string) {
    const newButton = activeTab.buttons.filter((button) => button.id === buttonId)
    if (buttonId != activeButton.id) {
      setActiveButton(newButton[0])
    }
  }

  const caseStudyContext = {
    caseStudy: caseStudy,
    projects: projects,
    aboutTabs: aboutTabs,
    activeTab: activeTab,
    activeButton: activeButton,
    changeActiveButton,
    changeActiveTab,
    resetActiveButton,
    showCaseStudy,
  };

  return <CaseStudyContext.Provider value={caseStudyContext}>{children}</CaseStudyContext.Provider>
}

export default CaseStudyContext;