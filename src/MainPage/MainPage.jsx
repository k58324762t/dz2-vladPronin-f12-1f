import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addName, clearName, createUser } from '../store/action'

function MainPage() {
	const name = useSelector(state => state.name.name)
	const dispatch = useDispatch()

	const creatUser = name => {
		dispatch(createUser(name))
		dispatch(clearName(' '))
	}

	const onchangInput = e => {
		dispatch(addName(e.target.value))
	}

	return (
		<div>
			<input type='text' onChange={onchangInput} value={name} />
			<button onClick={creatUser}> </button>
			<lu>
				{name.map((user, key) => {
					;<li key={key}>{user}</li>
				})}
			</lu>
		</div>
	)
}

export default MainPage
