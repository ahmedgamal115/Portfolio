import AboutUs from "@/components/AboutUs"
import Navbar from "@/components/Navbar"
import LandingPage from "@/components/LandingPage"
import Skills from "@/components/Skills";
import { Animator, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn, batch } from "react-scroll-motion"
import Certificates from "@/components/Certificates";
export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), MoveIn(-1800), Sticky());
  const FadeUpOnly = batch(Fade(), Move());
  return (
    <>
      <Navbar></Navbar>
      <div className="continer">
        <navbar></navbar>
        <div className="layout"></div>
        <ScrollContainer>
          <ScrollPage>
            <Animator style={{width:'100%',height: '100%'}} animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <LandingPage></LandingPage>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator style={{width:'100%',height: '100%'}} animation={ZoomInScrollOut}>
              <AboutUs></AboutUs>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator style={{width:'100%',height: '100%'}} animation={FadeUp}>
              <Skills></Skills>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator style={{width:'100%',height: '100%'}} animation={FadeUpOnly}>
              <Certificates></Certificates>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  )
}
