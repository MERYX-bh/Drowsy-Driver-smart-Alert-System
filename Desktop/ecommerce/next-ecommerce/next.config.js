/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://jmbaha:oe51MEXU7I9atqJx@cluster0.u7ffhx7.mongodb.net/?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET": "QMmq=Ed?ryT/.3$yv-f>\=9b7U~<9@hme/9]`6}%J9z24]-hK",
    "REFRESH_TOKEN_SECRET": "f_L}2WJrTjcw9g8D;ag^kPD`<XsKp)k?X*ddhn4f\,!9>)hG!7NaVea9^sd$E)Gh9-gCUctMs-a?9Dt#"
  }
}

module.exports = nextConfig
