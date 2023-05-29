
import { Layout } from "../../layouts/Layout"
import { AuthorSection, Credits,HomeHeader, LicenseSection} from "../components"


export const HomePage = () => {
  return (
    <Layout>
      <HomeHeader/>
      <Credits/>
      <AuthorSection/>
      <LicenseSection/>
    </Layout>
  )
}
