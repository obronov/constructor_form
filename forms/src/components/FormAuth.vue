<template>
  <form class="form-auth" action="/">
    <svg class="form-auth__icon" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1488 43.5668L24.683 60.956V79.3991L59.1488 62.0099V43.5668Z" fill="#1390E5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z" fill="#1180CB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1488 8.79065L24.683 26.1799V44.623L59.1488 27.2338V8.79065Z" fill="#35A2EC"/>
    </svg>
    <div class="form-auth__title">Вход</div>
    <ControlsList :controls="controls"/>
    <div class="form-item">
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
      btnOptions:{
        type:"submit",
        modifier:"primary",
        disabled: false
      },
      controls:[
        {
        "key": "login",
        "label": "Логин",
        "placeholder": "Укажите логин",
        "type": "string",
        "validation": {
          "required": true,
          "min": "6",
          "max": "7"
          }
        },
        {
        "key": "password",
        "label": "Пароль",
        "placeholder": "Укажите пароль",
        "type": "password",
        "validation": {
          "required": true,
          "pattern": "[0-9]",
          "max": "255"
          }
        },
        {
          "key": "role",
          "label": "Роль",
          "placeholder": "Укажите роль",
          "type": "select",
          "validation": {
            "required": true
          },
          "options": [
            {
            "key": "admin",
            "value": "Администратор"
            },
            {
            "key": "manager",
            "value": "Менеджер"
            }
          ]
        },
        {
          "key": "age",
          "label": "Возраст",
          "placeholder": "Укажите возраст",
          "type": "number",
          "validation": {
            "required": false,
            "min": "18",
            "max": "20"
          }
        },
      ]
    }
  },
  methods:{

  }

}

</script>

<style lang='scss' scoped>
.form-auth{
  font-size: 1rem;
}
</style>