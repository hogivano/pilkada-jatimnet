import Link from 'next/link'

const CategoryItem = props => {
  return (
    <a className="btn-gradient m-h-10">
      {props.title}
    </a>
  )
}

export default CategoryItem
