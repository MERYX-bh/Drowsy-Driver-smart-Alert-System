import React from 'react'
import { useState, useContext } from 'react'
import valid from '../utils/valid'
import { DataContext } from '@/Store/GlobalState'
import { postData } from '@/utils/fetchData'

const register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: ''
  }

  const [userData ,setUserData] = useState(initialState)
  const {name, email, password, cf_password} = userData
  const {state, dispatch} = useContext(DataContext)

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({type: 'NOTIFY', payload: {}})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/register', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    
  }

  return (
  <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="h1 fw-bold ml-10 mb-5 md-4 mt-4">Register</p>
                
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" className="form-control" name="name" value={name} onChange={handleChangeInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" className="form-control" name="email" value={email} onChange={handleChangeInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" className="form-control" name="password" value={password} onChange={handleChangeInput}/>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                      <input type="password" id="form3Example4cd" className="form-control" name="cf_password" value={cf_password} onChange={handleChangeInput}/>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary w-100 btn-lg">Register</button>
                  </div>
                  <p className="small fw-bold ml-4 pt-1 mb-0">Already have an account? <a href="/signin"
                className="link-danger">Sign in</a></p>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default register

//password of mongo db : oe51MEXU7I9atqJx