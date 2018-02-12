// Always load config in this way for maximum security

// ES6 Syntax
// export const config = {
//   port: process.env.PORT || 8080,
//   env: process.env.NODE_ENV || 'development',
// };

// module.exports Syntax
module.exports = config = {
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'development',
};
