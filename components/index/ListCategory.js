import CategoryItem from '../item/CategoryItem'
import bulmaCarousel from '../../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js'

const ListCategory = () => {
  const numbers = ['Kota Surabaya', 'Kota Sidoarjo', 'Kota Banyuwangi', 'Kab Probolinggo', 'Kota Gresik']
  const listItems = numbers.map((number) =>
    <CategoryItem title={number} />
  )

  bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
		  slidesToShow: 2
  })

  return (
    <section className="category-list w-100 m-t-10 carousel" data-slides-to-scroll="2">
      {listItems}
    </section>
  )
}

export default ListCategory
