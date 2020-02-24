import Header from './Header'
import Footer from './Footer'
import { geolocated } from "react-geolocated"
import '../styles/sass/base-style.sass'
import '../styles/sass/styles.sass'

const Layout = props => (
  <div className="bg-white-bone">
    <Header />
    <section className="container p-v-20">
    {props.children}
    </section>
    <Footer/>
  </div>
)

export default Layout
