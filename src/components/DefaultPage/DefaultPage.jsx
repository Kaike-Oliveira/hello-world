// COMPONENTS
import { Banner } from "components/Banner/Banner"
import { Footer } from "components/Footer/Footer"
import { Outlet } from "react-router-dom"

export const DefaultPage = () => {
  return (
    <main>
      <Banner />

      <Outlet />

      <Footer />
    </main>
  )
}