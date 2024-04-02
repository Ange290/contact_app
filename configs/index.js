const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://uange209:ZMiipsbNADluCudp@cluster0.qxfcneq.mongodb.net/Contact_App',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;