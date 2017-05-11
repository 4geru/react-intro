const initialState = {
  title: '',
  content: ''
}

export default(state = initialState, action) => {
  const type = action.type

  switch (type) {
    case "NOTE.UPDATE.TITLE" :
      return {title: action.payload.title, content: state.content}
    case "NOTE.UPDATE.CONTENT" :
      return {title: state.title, content: action.payload.content}
    default:
      return state
  }
}