import React, {useState} from 'react'
import IndexPng from '../../shared/index.PNG'
import Logo from '../../shared/logo.PNG'
import './styles.css'
import { Button, Input } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import {SendCode} from '../../Api/sendEmail'
import {Data} from '../../database/db'

function Index(){

    const history = useHistory()

    const [email, setEmail] = useState('')

    function handleRegister1(email){
        if(email !== '' || email.leght < 4){
            let length = 8
            let number = ''
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let charactersLength = characters.length
            for(let i = 0; i < length; i++){
                number += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            SendCode(email, number)
            Data.push({
                id: Data.legth,
                email: email, 
                code: number, 
            })
            history.push('/Register2')
        }
    }

    return(
        <div className="col-8 index row bg-white shadow p-0 mx-0">
            <img src={IndexPng} alt="Index PNG" className="col-8 indexpng m-0 p-0"/>
            <div className="col-4 row ">
                <div className="col-12 justify-content-center row logoA">
                    <img src={Logo} alt="logo" className="logo"/>
                </div>
                <h2 className="text-secondary singIn col-12 text-center mt-0">Sign Up</h2>
                <Link to="/" type="button" className="btn btn-light col-12 text-center google button m-2 p-2"><i className="fa fa-google"></i> Sign in with Google</Link>
                <Button type="button" className="btn btn-light col-12 text-center button m-2 p-2">Stack Coming soon</Button>
                <p className="text-center text-secondary mt-2 col-12">Use e-mail</p>
                <Input className="col-12 ml-2" type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></Input>
                <Button to="/" type="button" className="btn btn-light col-12 text-center m-2 p-2 continue text-white" onClick={() => handleRegister1(email)}>Continue</Button>
                <p className="col-12 my-5 text-center">Have an account? <Link to="/" className="sing">Log in</Link></p>
            </div>
        </div>
    )

}

export default Index