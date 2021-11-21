<template>
  <form class="form-auth" action="/" @submit.prevent="onSubmit($event)">
    <svg class="form-auth__icon" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1488 43.5668L24.683 60.956V79.3991L59.1488 62.0099V43.5668Z" fill="#1390E5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z" fill="#1180CB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1488 8.79065L24.683 26.1799V44.623L59.1488 27.2338V8.79065Z" fill="#35A2EC"/>
    </svg>
    <div class="form-auth__title">Вход</div>
    <ControlsList :controls="controls"/>
    <div class="form-item form-item_btn">
      <Btn :options="btnOptions">Войти</Btn>
    </div>
  </form>
</template>

<script>

import ControlsList from '@/components/ControlsList'
import Btn from '@/components/utilities/Btn'
export default {
  components: {ControlsList, Btn},
  data(){
    return{
      info: null,
      btnOptions:{
        type:"submit",
        modifier:"primary",
        disabled: false
      },
      controls:[
        {
        "key": "username",
        "label": "Логин",
        "type": "string",
        "validation": {
          "required": true
          }
        },
        {
        "key": "password",
        "label": "Пароль",
        "type": "password",
        "validation": {
          "required": true
          }
        }
      ]
    }
  },
  methods:{
    async onSubmit(event){
      let result = null;
      const axios = require('axios');
      let data = {
        'password': event.target.elements.password.value,
        'username': event.target.elements.username.value,
      };

      result = await axios
              .post('http://193.124.206.217:3000/auth/login', data)
              .then(response => response.data)
              .catch(error => console.log('Ошибка запроса: ', error));
      

      if(result.access_token != undefined){
        this.$store.commit("setToken", result.access_token)
        this.$router.push('/schemes');
      }
    }
  }
}


</script>

<style lang='scss' scoped>
.form-auth{
  font-size: 1rem;
}
</style>