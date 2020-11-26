import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Surbanner from "../components/surbanner"
import Who from "../components/who"
import Need from "../components/need"
import Activities from "../components/activities"
import Team from "../components/team"
import Footer from "../components/footer"
// import Team2 from "../components/team2"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Surbanner />
      <Banner />
      {/* <Team2 /> */}
      <Who />
      <Need />
      <Activities />
      <Team />
      <Footer />
    </Layout>
  )
}
