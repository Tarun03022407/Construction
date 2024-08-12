import React from 'react'
import Header from './Header';
import IntroSection from './IntoSection';
import WhoWeAre from './WhoWeAre';
import HowWeWork from './HowWeWork';
import DeliveredProjects from './DeliveredProjects';
import OngoingProjects from './OnGoingProjects';
import Inquiry from './Inquiry';
import AnimCursor from './AnimCursor';

function Mains() {
  return (
      <>
      <AnimCursor />
      <Header />
     <IntroSection />
     <WhoWeAre />
     <HowWeWork />
     <DeliveredProjects />
     <OngoingProjects />
     <Inquiry />
      </>
   
  )
}

export default Mains
