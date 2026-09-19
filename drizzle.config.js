import dotenv from 'dotenv'
dotenv.config({path:".env.local"})

export default{
    dialect:"postgresql",
    schema:"./configs/schema.js",
    dbCredentials:{
        url:process.env.DATABASE_URL
    }
}