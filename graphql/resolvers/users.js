const createUser = (input) => {
  const {
    email,
    fullName,
    age,
    careerScore,
    drinkingFrequency,
    isNightOwl,
    livingSituation,
    profession,
  } = input

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
