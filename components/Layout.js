import Header from './Header'
import Footer from './Footer'
import '../styles/sass/base-style.sass'
import '../styles/sass/styles.sass'

const Layout = props => (
  <div className="bg-white-bone">
    <Header />
    <section className="container">
    {props.children}
    </section>
    <Footer/>
  </div>
)

export default Layout
