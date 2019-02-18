import axios from 'axios'
const HttpServer = {};
HttpServer.install = function(Vue) {
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
    axios.interceptors.request.use(function(config) {
        if (config.url !== 'login') {
             console.log(433)
            const AUTH_TOKEN = localStorage.getItem("token");
            config.headers["Authorization"] = AUTH_TOKEN;
        }
        return config;
    },function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
      Vue.prototype.$http = axios
}
export default HttpServer;