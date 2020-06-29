import React, {useState} from 'react'
import IndexPng from '../../shared/index.PNG'
import Logo from '../../shared/logo.PNG'
import { Button, Input } from 'reactstrap'
import { Link } from 'react-router-dom'


function Index(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="col-8 index row bg-white shadow p-0 mx-0">
            <img src={IndexPng} alt="Index PNG" className="col-8 indexpng m-0 p-0"/>
            <div className="col-4 row ">
                <div className="col-12 justify-content-center row logoA">
                    <img src={Logo} alt="logo" className="logo"/>
                </div>
                <h2 className="text-secondary singIn col-12 text-center mt-0">Log In</h2>
                <Link to="/" type="button" className="btn btn-light col-12 text-center google button m-2 p-2"><i className="fa fa-google"></i> Log in with Google</Link>
                <Button type="button" className="btn btn-light col-12 text-center button m-2 p-2">Stack Coming soon</Button>
                <p className="text-center text-secondary mt-2 col-12">Use e-mail</p>
                <Input className="col-12 ml-2 mb-2" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></Input>
                <Input className="col-12 ml-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Link to="/" type="button" className="btn btn-light col-12 text-center m-2 p-2 continue text-white">Continue</Link>
                <p className="col-12 my-5 text-center">Don't have an account? <Link to="/Register" className="sing">Sign up</Link></p>
            </div>
        </div>
    )

}

export default Index