// src/assets/ava/avatars.ts

const avatars = Array.from({ length: 132 }, (_, i) => {
  const number = i === 0 ? '' : `-${i}`
  return require(`./Ellipse${number}.png`)
})

export default avatars
