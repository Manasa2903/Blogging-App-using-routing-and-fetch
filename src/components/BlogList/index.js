import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = () => {
  const [blogData, setBlogData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
    }))
    setBlogData(updatedData)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ul>
      {isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      ) : (
        blogData.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
        ))
      )}
    </ul>
  )
}

export default BlogList
