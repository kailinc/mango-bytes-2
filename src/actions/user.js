export const signIn = ({id, firstName, lastName, coderName, token, skills, powers, devCred,JavaScript, Python, C, Css, Go, Html, Java, Ruby, Angular, React, BootStrap, Django, Ember, MongoDB, Sql, Node, Rails, email, FireFingers, PestControlla, DocKing, CoffeeAngel, TypeNO, WalkingGoogle, }, fourScreen = {}) => ({
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
      Rails,
      FireFingers,
      PestControlla,
      DocKing,
      CoffeeAngel,
      TypeNO,
      WalkingGoogle,
    }
});

export const resetUser = () => ({
  type: 'RESET_USER'
})

export const updateAttr = ({ powers, devCred,JavaScript, Python, C, Css, Go, Html, Java, Ruby, Angular, React, BootStrap, Django, Ember, MongoDB, Sql, Node, Rails, FireFingers, PestControlla, DocKing, CoffeeAngel, TypeNO, WalkingGoogle, }, fourScreen = {}) => ({
  type: 'UPDATE_ATTRIBUTES',
  user: {
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
    Rails,
    FireFingers,
    PestControlla,
    DocKing,
    CoffeeAngel,
    TypeNO,
    WalkingGoogle
  }
})
