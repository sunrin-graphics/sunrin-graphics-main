import Header from '@components/common/Header'
import Banner from '@components/section/Banner'
import IntroduceSection from '@components/section/IntroduceSection'
import DemonstrationSection from '@components/section/DemoSection'
import ExhibitionSection from '@components/section/ExhibitionSection'
import Footer from '@components/common/Footer'
import PresentationSection from '@components/section/PresentationSection'
import React from 'react'

function App() {
    const introduceRef = React.useRef<HTMLDivElement>(null)
    const exhibitionRef = React.useRef<HTMLDivElement>(null)
    const demoRef = React.useRef<HTMLDivElement>(null)
    const presentationRef = React.useRef<HTMLDivElement>(null)

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        window.scrollTo({
            top: ref.current?.offsetTop ? ref.current.offsetTop - 100 : 0,
            behavior: 'smooth'
        })
    }

  return ( 
    <div className="App">
      <Header 
        scrollTo={scrollTo}
        refs={[introduceRef, exhibitionRef, demoRef, presentationRef]}
      />
      <Banner />
      <IntroduceSection ref={introduceRef}/>
      <ExhibitionSection ref={exhibitionRef} />
      <DemonstrationSection ref={demoRef} />
      <PresentationSection ref={presentationRef} />
      <Footer />
    </div>
  )
}

export default App
