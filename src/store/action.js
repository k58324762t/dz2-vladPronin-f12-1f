import { CLEAR_NAME, CREATE_USER } from './nameReducer'
import { ADD_NAME } from './nameReducer'

export const createUser = user => {
	return { type: CREATE_USER, payload: user }
}
export const addName = name => {
	return { type: ADD_NAME, payload: name }
}
export const clearName = name => {
	return { type: CLEAR_NAME, payload: name }
}
