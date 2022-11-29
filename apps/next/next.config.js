/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = require("next-transpile-modules")(["@mono/ui-lib"]); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
