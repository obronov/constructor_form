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
          ],
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
          ],
        ]
      }
    }
  }
}

</script>