import Link from 'next/link'

const LatestNewsItem = (props) => {
  return (
    <Link href="/about">
      <article className="media link">
        <figure className="media-left">
          <p className="image is-84x84">
            <img className="h-80px object-cover" src="https://bulma.io/images/placeholders/128x128.png"/>
          </p>
        </figure>
        <div className="media-content">
          <label className="color-secondary">
            Kota Surabaya
          </label>
          <h5 className="elipsed-2-line has-text-weight-semibold color-white">
            Bawa 40 Kilogram Sabu-sabu, 2 WNA Malaysia Ditangkap askals aaks
          </h5>
        </div>
      </article>
    </Link>
  )
}

export default LatestNewsItem
