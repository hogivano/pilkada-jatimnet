import LatestNewsItem from '../item/LatestNewsItem'

const LatestNews = () => {
  const numbers = ['Kota Surabaya', 'Kota Sidoarjo', 'Kota Banyuwangi', 'Kab Probolinggo', 'Kota Gresik',
  'Kota Surabaya', 'Kota Sidoarjo', 'Kota Banyuwangi', 'Kab Probolinggo', 'Kota Gresik']
  const listItems = numbers.map((number) =>
    <LatestNewsItem title={number} />
  )

  return (
    <section className="latest-news bg-dark">
      <h2 className="font-20 font-lato m-b-15 color-white">
        Berita Terbaru
      </h2>
      <div className="bottom-line-white">
      </div>
      <div className="latest-news-list m-v-20">
        {listItems}
      </div>
    </section>
  )
}

export default LatestNews
