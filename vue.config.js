module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'http://localhost:8082/',
    headers: { "Access-Control-Allow-Origin": "*" }
    }
  
};
