export const signIn = ({id, firstName, lastName, coderName, token, skills, powers, devCred,JavaScript, Python, C, Css, Go, Html, Java, Ruby, Angular, React, BootStrap, Django, Ember, MongoDB, Sql, Node, Rails, email}, fourScreen = {}) => ({
    type: 'SIGN_IN',
    user: {
      id,
      firstName,
      lastName,
      coderName,
      email,
      token,
      skills,
      powers,
      devCred,
      fourScreen,
      Angular,
      JavaScript,
      Python,
      C,
      Css,
      Go,
      Html,
      Java,
      Ruby,
      React,
      BootStrap,
      Django,
      Ember,
      MongoDB,
      Sql,
      Node,
      Rails
    }
});

export const signOut = () => ({
  type: 'SIGN_OUT'
})
