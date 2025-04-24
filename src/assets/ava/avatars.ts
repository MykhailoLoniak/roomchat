const avatars = Array.from({ length: 132 }, (_, i) => {
  const number = i + 1
  return require(`./${number}.svg`)
})

export default avatars
