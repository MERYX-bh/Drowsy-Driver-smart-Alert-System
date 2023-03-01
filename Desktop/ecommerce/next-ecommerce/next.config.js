/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://jmbaha:oe51MEXU7I9atqJx@cluster0.u7ffhx7.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
