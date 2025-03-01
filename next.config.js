/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Update protocol to "http" if accessing localhost without HTTPS
        hostname: "localhost",
        port: "3000", // Specify the port if your app is running on localhost:3000
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

module.exports = nextConfig;