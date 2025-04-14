import React from 'react'
import { PageWrapper, Testimonials } from '../../components'
import './team.css'
import OurTeam from '../../components/OurTeams/OurTeam';

const TeamPage = () => {

  return (
    <div>
      <PageWrapper
        title={"Our Team"}
        moveTo={"Home"}
        navigatePath={'/'}
        subtitle={"Team"}
      />


      <OurTeam />
      <Testimonials />
    </div>
  )
}

export default TeamPage
