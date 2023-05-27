/** @type {import('next').NextConfig} */
<<<<<<< HEAD
// const withHttps = require('next-https');

// module.exports = withHttps({
//   https: {
//     key: './localhost.key',
//     cert: './localhost.crt',
//   },
// });

const nextConfig = {}

module.exports = nextConfig
=======
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-cdn.jtvnw.net",
      },
    ],
  },
};
>>>>>>> df09780d0d8b090ee3e474694e443d3da0ff9af8
