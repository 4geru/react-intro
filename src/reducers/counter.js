const initialState = {
  count: 0
}

export default(state = initialState, action) => {
  const type = action.type

  switch (type) {
    case "COUNTER.ADD" :
      return {count: state.count + action.payload.number}
    case "COUNTER.DOUBLE" :
      return {count: state.count * 2}
    default:
      return state
  }
}