import Layout from '../components/Layout'
import Headline from '../components/index/Headline'
import LatestNews from '../components/index/LatestNews'
import ListCategory from '../components/index/ListCategory'
import CategoryNews from '../components/index/CategoryNews'

const Index = () => {
  return (
    <Layout>
      <Headline />
      <div className="columns is-gapless m-t-20">
        <div className="column is-three-fifths">
          <ListCategory className="m-t-20"/>
          <CategoryNews />
        </div>
        <div className="column">
          <LatestNews />
        </div>
      </div>
    </Layout>
  )
}

export default Index
