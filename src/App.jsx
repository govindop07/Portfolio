import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HeroMain from './components/heroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain'
import SubHeroMain from './components/subHeroSection/SubHeroMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';

function App() {

  return (
    <main>
      <NavbarMain />
      <HeroMain />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App