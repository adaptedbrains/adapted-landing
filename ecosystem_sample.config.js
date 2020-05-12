module.exports = {
    apps: [
        {
            name: 'fractionalCTO',
            script: './build/bundle.js',
            watch: true,
            env: {
                PORT: 9000,
                NODE_ENV: 'development'
            },
            env_production: {
                PORT: 9000,
                NODE_ENV: 'production'
            }
        }
    ]
};
