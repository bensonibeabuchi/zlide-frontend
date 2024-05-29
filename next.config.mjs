/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "plus.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "http",
          hostname: "localhost",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "zlide-backend-production.up.railway.app",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;

  