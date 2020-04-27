import CategoryNewsItem from '../item/CategoryNewsItem'

const CategoryNews = () => {
  var list = []
  for (var i = 0; i < 6; i++) {
    list.push(
      <div className="column">
        <CategoryNewsItem />
      </div>
    )
  }
  return (
    <section className="category-news w-100 m-v-10">
      <div className="columns w-100" style={{ display: 'grid', 'grid-template-columns': '50% 50%', 'grid-auto-flow': 'dense' }}>
        {list}
      </div>
      <div className="w-100 text-center">
        <button className="button is-primary round-20px is-outlined">Tampilkan Lagi</button>
      </div>
    </section>
  )
}

export default CategoryNews
