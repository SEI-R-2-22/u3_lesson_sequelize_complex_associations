const { User, sequelize } = require('./models')
const stringify = require('../utils')

const getUsersAndFollowers = async () => {
  try {
    const list = await User.findAll({
      include: [{
        model: User,
        as: 'followers',
        through: { attributes: [] }
      }]
    })
    stringify(list)
  } catch (error) {
    console.log(error)
  }
}

const getUserFollowing = async () => {
  try {
    const list = await User.findAll({
      include: [{
        model: User,
        as: 'following',
        through: { attributes: [] }
      }]
    })
    stringify(list)
  } catch (error) {
    console.log(error)
  }
}

async function main() {
  try {
    await getUsersAndFollowers()
    await getUserFollowing()
  } catch (error) {
    console.log(error)
  } finally {
    sequelize.close()
  }
}

main()
