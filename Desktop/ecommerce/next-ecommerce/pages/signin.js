import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const signin = () => {
  return (
    <div>
      <Head>
        <title>signin</title>
      </Head>
       
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <h3 className='mt-6'>Sign in</h3>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>

  
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">Email address</label>
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

   

          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">Password</label>
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg w-100"
             >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>

</section>
    </div>
  )
}

export default signin