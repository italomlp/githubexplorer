// Action Types
export const Types = {
  ADD: 'favorites/ADD',
  SEARCH: 'favorites/SEARCH',
  REMOVE: 'favorites/REMOVE',
};

// Reducer
const initialState = [];

export default function favorites(state = [], action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, action.payload.repository];
    case Types.REMOVE:
      return state.filter(repository => repository.id !== action.payload.id);
    default:
      return state;
  }
}

// Action Creators
export function addFavorite(repositoryName) {
  return {
    type: Types.SEARCH,
    payload: {
      repositoryName,
    },
  };
}

export function removeFavorite(id) {
  return {
    type: Types.REMOVE,
    payload: {
      id,
    },
  };
}
