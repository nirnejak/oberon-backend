const createUser = (parent, args, context, info) => {
  const {
    input: {
      email,
      fullName,
      age,
      careerScore,
      drinkingFrequency,
      isNightOwl,
      livingSituation,
      profession,
    },
  } = args

  // TODO: Connect with MongoDB

  return {
    email,
    fullName,
    age,
    careerScore,
    drinkingFrequency,
    isNightOwl,
    livingSituation,
    profession,
  }
}

module.exports = {
  createUser,
}
