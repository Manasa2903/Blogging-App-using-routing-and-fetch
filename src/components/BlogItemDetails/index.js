import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {useState, useEffect} from 'react'
import './index.css'

const BlogItemDetails = () => {
  const [blogItemDetails, setBlogItemDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://apis.ccbp.in/blogs/${id}`)
      .then(response => response.json())
      .then(jsonData => {
        const updatedData = {
          title: jsonData.title,
          author: jsonData.author,
          imageUrl: jsonData.image_url,
          avatarUrl: jsonData.avatar_url,
          content: jsonData.content,
        }
        setBlogItemDetails(updatedData)
        setIsLoading(false)
      })
  }, [id])

  const {title, author, content, avatarUrl, imageUrl} = blogItemDetails
  return (
    <>
      {isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      ) : (
        <div className="blog-details">
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={author} className="author-avatar" />
            <p className="author-name">{author}</p>
          </div>
          <div className="image-container">
            <img src={imageUrl} alt={title} className="details-topic-image" />
          </div>
          <p className="content">{content}</p>
        </div>
      )}
    </>
  )
}

export default BlogItemDetails
