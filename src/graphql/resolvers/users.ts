const createUser = (parent: any, args: any, context: any, info: any) => {
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

  // TODO: Connect with Database to create a user

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

export default {
  createUser,
}
