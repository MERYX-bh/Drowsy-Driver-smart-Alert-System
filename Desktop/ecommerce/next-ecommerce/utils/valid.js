const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return 'please add all fields'

    if(!validateEmail(email))
    return 'Invalid email'

    if(password.length < 6)
    return 'password must be at least 6 characters'

    if(cf_password != password)
    return 'please enter similar password'
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

export default valid 