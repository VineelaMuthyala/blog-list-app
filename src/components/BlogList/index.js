import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul>
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} blogItemDetails={eachItem} />
        ))}
      </ul>
    )
  }
}
export default BlogList
