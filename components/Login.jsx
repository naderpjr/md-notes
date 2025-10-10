'use client'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    const { login, signup } = useAuth();
    const router = useRouter();

    const cantAuth = !email.includes('@') || password.length < 6;

    async function handleAuthUser() {
        if (cantAuth) {
            return
        }
        setIsAuthenticating(true);

        try {
            if (isRegister) {
                await signup(email, password)
            } else {
                await login(email, password)
            }

            router.push('/notes')

        } catch (error) {
            console.log(error.message);
        } finally {
            setIsAuthenticating(false)
        }
    }

    return (
        <div className='login-container'>
            <h1 className='text-gradient'>MDNotes</h1>
            <h2>Organized note taking made easy</h2>
            <p>Build your every own archive of easily navigated and indexed information and notes.</p>
            <div className='full-line'></div>
            <h6>{isRegister ? 'Create an account' : 'log in'}</h6>
            <div>
                <p>Email</p>
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} type="text" placeholder='Enter your email address...' />
            </div>
            <div>
                <p>Password</p>
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" placeholder='********' />
            </div>
            <button onClick={handleAuthUser} disabled={cantAuth || isAuthenticating} className='submit-btn'>
                <h6>{isAuthenticating ? 'Submitting...' : 'Submit'}</h6>
            </button>
            <div className='secondary-btns-container'>
                <button onClick={() => {
                    setIsRegister(!isRegister)
                }} className='card-button-secondary'>
                    <small>{isRegister ? 'Log in' : 'Sign up'}</small>
                </button>
                <button className='card-button-secondary'>
                    <small>Forgot password</small>
                </button>
            </div>
            <div className='full-line'></div>
            <footer>
                <a target='_blank' href="https://github.com/naderpjr">
                    <img src="https://avatars.githubusercontent.com/u/148011035?v=4" alt="pfp" />
                    <h6>@naderpjr</h6>
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </div>
    )
}

export default Login