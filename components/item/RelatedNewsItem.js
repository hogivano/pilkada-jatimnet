import Link from 'next/link'

const RelatedNewsItem = (props) => {
  return (
    <Link href="/">
      <div>
        <h4 className="elipsed-2-line color-white m-v-10 font-15">
        Bawa 40 Kilogram Sabu-sabu, 2 WNA Malaysia Ditangkap askals aaks
        </h4>
        <div style={{ 'border-bottom' : '1px solid rgba(219, 219, 219, 0.5)' }}></div>
      </div>
    </Link>
  )
}

export default RelatedNewsItem
