module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      "/api": "http://3.27.214.129:3001",
    },
  },
};
