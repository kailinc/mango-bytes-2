export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  }
  catch (err){
    return err
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('user', serializedState)
  } catch(err) {
    return err
  }
}
