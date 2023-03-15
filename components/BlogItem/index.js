// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails

  const hline = () => {
    if (id > 1) {
      return <hr />
    }
    return null
  }

  return (
    <li className="Blog-item-container">
      {hline()}
      <div className="heading-container">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="blog-item-para">{description}</p>
    </li>
  )
}

export default BlogItem
