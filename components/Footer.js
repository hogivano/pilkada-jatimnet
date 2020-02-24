const Footer = () => {
  return (
    <section className="container">
      <div className="m-h-20 m-v-20">
        <div className="columns">
          <div className="column is-one-fifth align-self-center">
            <img src="https://jatimnet.com/_nuxt/img/8c22f58.png" className="h-40px"/>
          </div>
          <div className="column align-self-center">
            <div className="is-pulled-right">
              <a href="https://jatimnet.com/kontak" className="color-secondary font-15 m-h-10">Kontak Kami</a>
              <a href="https://jatimnet.com/pedoman-media-siber" className="color-secondary font-15 m-h-10">Pemodaman Penulisan Siber</a>
              <a href="https://jatimnet.com/kode-etik" className="color-secondary font-15 m-h-10">Kode Etik Jurnalistik</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
