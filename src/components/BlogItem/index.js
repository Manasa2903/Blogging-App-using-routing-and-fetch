import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = ({blogDetails}) => {
  const {id, title, author, avatarUrl, imageUrl, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="blog-item">
        <img src={imageUrl} alt={title} className="topic-image" />
        <div>
          <p className="topic-name">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={author} className="author-avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
