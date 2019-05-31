module.exports = {
    apps: [
        {
            name: 'Kutt',
            script: 'server/server.js',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};