module.exports = async () => ({
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
})
