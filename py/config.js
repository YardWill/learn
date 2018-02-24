module.exports = {
    enableCluster: true,
    registryPort: 8001,
    webPort: 8002,
    database: {
        db: 'snpm',
        username: '',
        password: '',
        dialect: 'mariadb',
        host: '127.0.0.1',
        port: 3306,
    },
    registryHost: 'registry.cnpm.xinpinget.com',
    enablePrivate: false,
    admins: {
        yard: 'zjwengyidong@outlook.com',
    },
    syncModel: 'exist',
    scopes: ['@ui', '@server', '@util', '@test'],
    badgeSubject: 'snpm',
    privatePackages: ['snpm'],
    sourceNpmRegistry: 'https://registry.yarnpkg.com',
    sourceNpmRegistryIsCNpm: false,
};
