<template>
  <div class="page create">
    <div class="container">
      <CreateSchemes :template="schema"/>
    </div>    
  </div>
</template>

<script>
import CreateSchemes from '@/components/CreateSchemes'
export default {
  components: {CreateSchemes},
  data(){
    return{
      "schema": {
        "name": "",
        "fields": [
          {
            "key": "key",
            "type": "string",
            "label": "",
            "validation": {
                "min": '',
                "max": '',
                "required": false
            }
          },
          {
            "key": "key2",
            "type": "string",
            "label": "",
            "validation": {
                "min": '',
                "max": '',
                "required": false
            }
          },
          {
            "key": "",
            "type": "select",
            "label": "",
            "validation": {
                "min": '',
                "max": '',
                "required": false
            },
            "options": [
              {
                "key": "string",
                "value": "Текстовое поле"
              },
              {
                "key": "number",
                "value": "Числовое поле"
              },
              {
                "key": "password",
                "value": "Пароль"
              },
              {
                "key": "checkbox",
                "value": "Чекбокс"
              },
              {
                "key": "phone",
                "value": "Номер телефона"
              },
              {
                "key": "select",
                "value": "Выпадающий список"
              }
            ]
          }
        ]
      }
    }
  }
}

</script>