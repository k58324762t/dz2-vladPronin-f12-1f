const initializeState = {
	users: [],
	name: '',
}

export const CREATE_USER = 'CREATE_USER'
export const ADD_NAME = 'ADD_NAME'
export const CLEAR_NAME = 'CLEAR_NAME'

export const nameReducer = (state = initializeState, action) => {
	switch (action.type) {
		case CREATE_USER:
			return { ...state, users: [...state, action.payload] }
		case ADD_NAME:
			return { ...state, name: action.payload }
		case CLEAR_NAME:
			return { ...state, name: null }
		default:
			return state
	}
}
