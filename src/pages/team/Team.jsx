import React from 'react'
import { PageWrapper, Testimonials } from '../../components'
import './team.css'
import OurTeam from '../../components/OurTeams/OurTeam';

const TeamPage = () => {

  const data = [
    // { id: 4, src: "teachers/9127bedb-5673-43f2-b6cf-bff0d047f543 3.JPG", name: "Mohsin Zanda", degree: "Faculty Of Statistics", rating: 6, courses: 8, students: 30, profileLink: "/team-single" },
    // { id: 2, src: "teachers/1_20240924_223226_0000.jpg", name: "Ali sher khan", degree: "Faculty Of Physics Chemsitry And Math", rating: 6, courses: 8, students: 30, profileLink: "/team-single" },
    { id: 7, src: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", name: "Areeba Yaqoob", degree: "Faculty Of Statistics", rating: 6, courses: 8, students: 30, profileLink: "/team-single" },
    { id: 8, src: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", name: "Hudaibia Memon", degree: "Faculty Of Mathematics", rating: 6, courses: 8, students: 30, profileLink: "/team-single" },
    { id: 8, src: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", name: "Khizra Ghouri", degree: "Faculty Of Mathematics", rating: 6, courses: 8, students: 30, profileLink: "/team-single" },
  ];

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
