import Layout from '../components/Layout'
import Headline from '../components/index/Headline'
import LatestNews from '../components/index/LatestNews'
import ListCategory from '../components/list/Category'

const Index = () => {
  return (
    <Layout>
      <Headline />
      <div className="columns is-gapless m-t-20">
        <div className="column is-three-fifths">
          <ListCategory />
        </div>
        <div className="column">
          <LatestNews />
          Ini adalah bagian berita terbaru
        </div>
      </div>
      <h1>Hendriyan Ogivano</h1>
      <label>Ini adalah label</label>
    </Layout>
  )
}

export default Index
