const totalLikes = (blogs) => {
  let reducer = (accumulator, blog) => {
    return accumulator + blog.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {

  if (blogs.length > 0) {
    let favorite = { ...blogs[0] }

    blogs.forEach(blog => {
      if (blog.likes > favorite.likes) {
        favorite = { ...blog }
      }
    })
    return {
      title: favorite.title,
      author: favorite.author,
      likes: favorite.likes
    }
  } else {
    return 'no blogs on the list'
  }
}

module.exports = {
  totalLikes,
  favoriteBlog
}

