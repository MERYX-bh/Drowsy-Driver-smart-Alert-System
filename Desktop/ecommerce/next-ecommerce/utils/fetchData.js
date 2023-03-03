const baseURL = process.env.BASEURL

export const getData = async (url,token) =>{
    const res = await fetch(`${baseURL}/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    const data = await res.json()
    return data
}

export const postData = async (url,token) =>{
    const res = await fetch(`${baseURL}/api/${url}`, {
        method: 'POST',
        headers: {
            'Authorization': token
        }
    })
    const data = await res.json()
    return data
}
