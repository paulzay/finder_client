const loadingReducer = ( state = false, action) => {

    switch(action.type){
  
          case "LOADING":
            return true
          case "LOADING_DONE":
            return false
          default:
              return state
      }
  }
  
  export default loadingReducer