import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);//global olarak bir kütüphane kullanmak istiyorsak Vue.use komutunu kullanmamız gerekiyor

Vue.http.options.root = "https://vuejs-vue-resource-b6efc-default-rtdb.firebaseio.com"; //bunu tanımlayarak vue-resource 'yi global olarak tanımlayabiliriz

Vue.http.interceptors.push((request, next) => { //İsteklerinizi başlamadan veya atmış olduğunuz isteğin cevabı henüz dönülmeden veya dönen cevaba göre araya girerek konfigüre edebilir, farklı işlemleri tetikleyebilirsiniz.
  // if(request.method == "POST"){ 
  //   request.method = "PUT" //gönderilen veri post olarak gittiyse onu put olarak değiştir diyoruz
  // }
  next(response => {
    response.json = () => {
      return {
        userList : response.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
