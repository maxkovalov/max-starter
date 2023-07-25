/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
  exprimental: {
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 500,
        aggregateTimeout: 300,
      };
      return config;
    },
  },
};

module.exports = nextConfig;
