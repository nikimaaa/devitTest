db.posts.find().skip(5).limit(5)

db.posts.find({ like: { $gt: 100 } })

db.posts.insertOne({
  title: "Some title",
  content: "Some content",
  author: "Nikita",
  like: 10,
  dislike: 10
})

db.posts.aggregate([
  { $group: { _id: "$author", likes: { $sum: "$like" } } }
])
