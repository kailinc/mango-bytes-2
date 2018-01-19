export const signIn = ({id, firstName, lastName, coderName, token, skills, powers, devCred}, fourScreen = {}) => ({
    type: 'SIGN_IN',
    user: {
      id,
      firstName,
      lastName,
      coderName,
      token,
      skills,
      powers,
      devCred,
      fourScreen
    }
});
