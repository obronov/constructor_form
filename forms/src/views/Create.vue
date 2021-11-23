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
      schema: {
        "name": "",
        "fields": [
          [
            {
              "key": "key_schema",
              "value": "",
              "type": "string",
              "label": "Ключ свойства",
              "validation": {
                  "required": true
              }
            },
            {
              "key": "name_properties",
              "value": "",
              "type": "string",
              "label": "Название свойства",
              "validation": {
                  "required": true
              }
            },
            {
              "key": "select_properties", 
              "type": "select",
              "value": "",
              "label": "Поле для отображения",
              "validation": {
                  "required": true
              },
              "options": [
                {
                  "key": "string",
                  "value": "Текстовое поле",
                  "validation": {
                    "min": "",
                    "max": "",
                    "pattern": "",
                    "required": false
                  },
                },
                {
                  "key": "number",
                  "value": "Числовое поле",
                  "validation": {
                    "min": "",
                    "max": "",
                    "required": false
                  },
                },
                {
                  "key": "password",
                  "value": "Пароль",
                  "validation": {
                    "min": "",
                    "max": "",
                    "pattern": "",
                    "required": false
                  },
                },
                {
                  "key": "checkbox",
                  "value": "Чекбокс",
                  "validation": {
                    "required": false
                  },
                },
                {
                  "key": "phone",
                  "value": "Номер телефона",
                  "validation": {
                    "required": false
                  },
                },
                {
                  "key": "select",
                  "value": "Выпадающий список",
                  "validation": {
                    "required": false
                  },
                }
              ]
            }
          ]
        ]
      },
    }
  }
}

</script>