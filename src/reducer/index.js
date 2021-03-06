let initState = {
  posts: [],
  searchText: ''
}

export default function Reducer(state = initState, action){
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [
          ...state.posts,
          action.post,
        ]
      }
    case 'SEARCH':
      return {
        ...state,
        searchText: action.text
      }
  }
}
