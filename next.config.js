const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withTypescript(withCSS(withImages()));



// module.exports = {
//   module: {
//     rules: [
//       withTypescript(),
//       withCSS({
//           cssModules: true
//         }),
        
//     ]
//   },
// }
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssModules: true
// })
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssModules: true,
//   withTypescript()
// })
// module.exports = withTypescript(withCSS({
//   cssModules: true
// }))

// module.exports = withCSS(withTypescript(
//   cssModules: true,
//   webpack: (config) => {
//      return config
//   }))

// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }
