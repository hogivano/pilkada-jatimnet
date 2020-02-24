import CategoryItem from '../item/CategoryItem'

const ListCategory = () => {
  const numbers = ['Kota Surabaya', 'Kota Sidoarjo', 'Kota Banyuwangi', 'Kab Probolinggo', 'Kota Gresik']
  const listItems = numbers.map((number) =>
    <CategoryItem title={number} />
  )
  return (
    <section className="category-list w-100 m-t-10">
      {listItems}
    </section>
  )
}

export default ListCategory
