import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import HOmeSection from './components/Home'
import JusticeSection from "./components/JusticeSection";
import Blog from './components/NewsCarousel';
import Eportal from './components/Eportal';
import Fotter from "./components/Fotter";
export default function Home() {
  return (
    <>
       <Hero></Hero>
       <NavBar></NavBar>
       <HOmeSection></HOmeSection>
       <JusticeSection></JusticeSection>
       <Blog></Blog>
       <Eportal></Eportal>
       <Fotter></Fotter>
    </>

  );
}
