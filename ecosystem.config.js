module.exports = {
    apps: [
        {
            name: 'ulr shortner',
            script: 'server/server.js',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};