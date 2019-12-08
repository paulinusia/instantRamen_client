module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: 'http://localhost:8081/',
    headers: { "Access-Control-Allow-Origin": "*" }
    }
  
};
