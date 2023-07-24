import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <div className="list-container">
      <li>
        <div className="post-title-container">
          <h1 className="title-heading">{title}</h1>
          <p className="date-text">{publishedDate}</p>
        </div>
        <p className="description-text">{description}</p>
        <hr />
      </li>
    </div>
  )
}
export default BlogItem
