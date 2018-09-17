const withPlugins = require('next-compose-plugins');
const Typescript = require('@zeit/next-typescript')
const Css = require('@zeit/next-css')
const Images = require('next-images')
const Fonts = require('next-fonts')

const nextConfig = {
    distDir: 'build',
    webpack: (config, options) => {
   
    console.log(config.module.rules[0]);
      return config;
    },
  };

module.exports = withPlugins([
    Typescript,
    Css,
    Images,
    Fonts
], nextConfig)