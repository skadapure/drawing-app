import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useStore } from "../../store";
import {login} from '../../store/actions'

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [form,setForm] = useState({
		userId: '',
		password: ''
	})
  const { userId } = useStore();
	const handleSubmit = async(e)=>{
		e.preventDefault();
		login(dispatch, form);
	}

	useEffect(() => {
		if(userId) navigate("/", { replace: true});
	}, [navigate, userId]);
	const InputFields = {
		padding:'0.5rem',
		margin:'0.8rem',
		borderRadius: '4px'
	}
	const ButtonStyle = {
		borderRadius: '4px',
		padding:'0.7rem',
		margin:'0.5rem'
	}
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit} >
			<label for="email">Email</label>
			<input type="text" style={InputFields}
				placeholder="email" id="mail"
			onChange={(e) =>
			setForm({...form, userId: e.target.value})} />
			<br/>
			<label for="password">Password</label>
			<input type="password" placeholder="Password"
				style={InputFields}
			onChange={(e) =>
			setForm({...form, password: e.target.value})}/>
			<br/>
			<button type="submit" style={ButtonStyle}>
				Submit
			</button>
			</form>
		</div>

	)
}

export default Login
