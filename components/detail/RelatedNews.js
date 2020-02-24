import RelatedNewsItem from '../item/RelatedNewsItem'

const RelatedNews = () => {
  var listItems = []
  for(var i = 0; i < 10; i++){
    listItems.push(
      <RelatedNewsItem />
    )
  }

  return (
    <section className="related-news bg-dark p-h-10 p-v-10 m-t-20">
      <h2 className="font-20 font-lato m-b-10 color-white text-center">
        Berita Terkait
      </h2>
      <div className="bottom-line-white" />
      <div className="related-news-list m-v-10">
        {listItems}
      </div>
    </section>
  )
}

export default RelatedNews
