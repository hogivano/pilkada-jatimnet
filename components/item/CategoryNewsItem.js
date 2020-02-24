import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CategoryNewsItem = () => {
  return (
    <a href="#" className="category-news-item-link">
      <div className="card">
        <header className="card-header">
          <div className="div-front-img h-200px w-100">
            <img src="https://i0.wp.com/api.jatimnet.com/jinet/assets/media/filer_public_thumbnails/filer_public/48/6f/486f8372-e2af-425a-b5dd-7abb105b060f/penculikan_anak-01.jpg__780x439_q85_subsampling-2.jpg"
            className="w-100 h-200px object-cover front-img" alt="Ini adalah gambar test"/>
          </div>
        </header>
        <div className="card-content">
          <div className="content">
            <label className="color-secondary">Kota Surabaya</label>
            <h5 className="elipsed-2-line">
              <b>Persyaratan Calon Pasangan "Djamas" Jalur Independen Ditolak KPU Jember</b>
            </h5>
            <p className="font-nunito">
              T Pelindo III (Persero) membuka fasilitas baru peribadatan upacara melasti di Pelabuhan Benoa, Bali.
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <div className="column is-four-fifths">
            <div className="w-100 columns p-h-10 p-v-10">
              <img src="https://i0.wp.com/api.jatimnet.com/jinet/assets/media/user_profile/user_profile/picture/Bae.png" className="circle-img-50"/>
              <div className="p-h-10 align-self-center">
                <p className="m-b-0 lh-1">
                  Hendriyan Ogivano
                </p>
                <label className="color-dark-grey font-12">
                  Reporter
                </label>
              </div>
            </div>
          </div>
          <div className="column align-self-center">
            <FontAwesomeIcon className="color-secondary is-pulled-right " icon={faArrowRight} />
          </div>
        </footer>
      </div>
    </a>
  )
}

export default CategoryNewsItem
