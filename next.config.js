/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for compatibility with existing React setup
  output: "export",
  trailingSlash: true,
  // Configure webpack to handle existing React components
  webpack: (config, { isServer }) => {
    // Handle CSS imports for client-side only
    if (!isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      });
    }

    return config;
  },
  // Configure paths for existing components
  experimental: {
    externalDir: true,
  },
  // Skip type checking during build to avoid TypeScript version issues
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
