import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login() {

    const validationSchema = yup.object().shape({
        username: yup.string().required(),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                "Password must contain one uppercase, one number and one special case character"
            )
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const submitForm = () => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=a7f31de2b2004729b36dbda8471013d0&response_type=token&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&redirect_uri=http://localhost:3000/home`
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <span>Username</span> <input type="text" name="username" placeholder="username" {...register('username')} />
                    <p> {errors.username?.message} </p>
                <span>Password</span> <input type="password" name="password" placeholder="password" {...register('password')} />
                    <p> {errors.password?.message}</p>
                <input type="submit"></input>
            </form>
        </div>
    )
}
