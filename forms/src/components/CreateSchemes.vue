<template>
  <div class="create-schema">
    <div class="create-schema__header">      
      <h1 class="title title_create-schema-header">Новая схема</h1>
      <ControlText :options="nameSchema"/>
    </div>
    <div class="create-schema__main">
      <h2 class="title title_create-schema-main">Свойства схемы</h2>
      <p class="create-schema__description">Схема должна содержать хотя бы одно свойство</p>
    </div>
  </div>
</template>

<script>
import ControlText from '@/components/utilities/ControlText'
export default {
  components: {ControlText},
  props:{
    template: Object
  },
  data(){
    return{
      nameSchema: {
        key: 'name_schema',
        label: 'Название схемы',
        type: 'string',
        validation: {
          required: true
          }
      },
      schema: this.template,
      controls:[
        {
        "type": "string",
        "validation": {
          "required": false,
          "min": "",
          "max": ""
          }
        },
        {
        "type": "number",
        "validation": {
          "required": false,
          "min": "",
          "max": ""
          }
        },
        {
        "type": "password",
        "validation": {
          "required": false,
          "pattern": "",
          "max": ""
          }
        },
        {
        "type": "checkbox",
        "validation": {
          "required": false,
          "pattern": "",
          "max": ""
          }
        },
        {
        "type": "phone",
        "validation": {
          "required": false,
          "pattern": "",
          "max": ""
          }
        },
        {
        "type": "select",
        "validation": {
          "required": false,
          },
        "options": []
        }
      ]
    }
  }
}

</script>

<style lang='scss' scoped>

</style>