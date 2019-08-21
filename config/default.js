module.exports = {
    port: 8888,
    session: {
        secret: 'startup',
        key: 'startup',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://127.0.0.1:27017/startup'
}