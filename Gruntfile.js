
module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.initConfig({
    connect: {
      options: {
        port: 3000,
        hostname: 'localhost'
      },
      server2: {
        proxies: [
          {
            context: '/:itemNo/reviews',
            host: 'reviewhost',
            port: 3002,
          }
        ]
      }

    }
  })
  grunt.registerTask('e2etest', (target) => {
    grunt.task.run([
      'configureProxies:server2',
      'open'
    ])
  })
}