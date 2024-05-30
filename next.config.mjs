/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.builder.io",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "utfs.io",
          pathname: "**",
        },
        
      ]
    }
  }
  
  export default nextConfig
  