import React from 'react'
import Header from './Header';
import IntroSection from './IntoSection';
import WhoWeAre from './WhoWeAre';
import DeliveredProjects from './DeliveredProjects';
import OngoingProjects from './OnGoingProjects';
import Inquiry from './Inquiry';
import AnimCursor from './AnimCursor';
import HowWeWorkSection from './HowWeWork';

function Mains() {
  return (
      <>
      <AnimCursor />
      <Header />
     <IntroSection/>
     <WhoWeAre />
     <HowWeWorkSection />
     <DeliveredProjects />
     <OngoingProjects />
     <Inquiry />
      </>
   
  )
}

export default Mains
