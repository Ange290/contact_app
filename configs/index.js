const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://uange209:htH5rbRCS1R7VzK4@cluster0.xrx4ixh.mongodb.net/',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;