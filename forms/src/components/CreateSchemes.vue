<template>
  <form class="create-schema" method="post" action="/">
    <div class="create-schema__header">      
      <h1 class="title title_create-schema-header">Новая схема</h1>
      <ControlText :options="nameSchema"/>
    </div>
    <div class="create-schema__main">
      <h2 class="title title_create-schema-main">Свойства схемы</h2>
      <p class="create-schema__description">Схема должна содержать хотя бы одно свойство</p>
      <ul class="create-schema-items">
        <li class="create-schema-items__item" 
          v-for="(item, index) in schema.fields" :key="index"
          :class="{opened: selectedItem == `item${index}`}"
          >
          <button class="create-schema-items__btnExpand" type="button" @click="showProperty(`item${index}`)">
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.29289 4.29289L0.853553 0.853553C0.538571 0.538571 0.761654 0 1.20711 0H8.79289C9.23835 0 9.46143 0.53857 9.14645 0.853553L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289Z" fill="#272727"/>
            </svg>
          </button> 
          <div class="create-schema-items__properties">
            <div class="create-schema-items__controls">
              <div class="create-schema-items__properties-name">
                <span>Свойство {{index + 1}}: </span> 
                <span>{{item[1].value}}</span>
              </div>
              <div class="create-schema-items__short-desc" >{{setShortDescription(item[2].value, item[0].value)}}</div>
              <div class="create-schema-items__controls-items" v-show="selectedItem == `item${index}`">
                <ControlText class="control_create-schema" @oninput="(value) => item[0].value = value" :options="{
                  key: item[0].key,
                  label: item[0].label,
                  value: item[0].value,
                  type: item[0].type,
                  validation: item[0].validation
                }"/>
                <ControlText class="control_create-schema" @oninput="(value) => item[1].value = value" :options="{
                  key: item[1].key,
                  label: item[1].label,
                  value: item[1].value,
                  type: item[1].type,
                  validation: item[1].validation
                }"/>
                <ControlSelect class="control_create-schema" @oninput="(option) => item[2].value = option.key" :options="{
                  key: item[2].key + index,
                  label: item[2].label,
                  value: item[2].value,
                  type: item[2].type,
                  validation: item[2].validation,
                  options: item[2].options
                }"/>
              </div>
              
            </div>

            <div class="create-schema-items__controls" v-if="selectedItem == `item${index}`">
              <div class="create-schema-items__properties-name">
                <span>Валидация</span> 
              </div>
            </div>
            
          </div>
          <button class="create-schema-items__btnDelete" v-if="showBtnDelete" type="button" @click="deleteProperty(index)">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="5" />
              <path d="M9 12H11H27" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 12V10C14 9.46957 14.2107 8.96086 14.5858 8.58579C14.9609 8.21071 15.4696 8 16 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V12M25 12V26C25 26.5304 24.7893 27.0391 24.4142 27.4142C24.0391 27.7893 23.5304 28 23 28H13C12.4696 28 11.9609 27.7893 11.5858 27.4142C11.2107 27.0391 11 26.5304 11 26V12H25Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 17V23" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 17V23" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import ControlText from '@/components/utilities/ControlText'
import ControlSelect from '@/components/utilities/ControlSelect'
export default {
  components: {ControlText, ControlSelect},
  props:{
    template: Object
  },
  data(){
    return{
      selectedItem: null,
      nameSchema: {
        key: 'name_schema',
        label: 'Название схемы',
        value: 'ttt',
        type: 'string',
        validation: {
          required: true
          }
      },
      schema: this.template,
      controls:[
        {
        "label": "Текстовое поле",
        "type": "string",
        "validation": {
          "required": false,
          "min": "",
          "max": ""
          }
        },
        {
        "label": "Числовое поле",
        "type": "number",
        "validation": {
          "required": false,
          "min": "",
          "max": ""
          }
        },
        {
        "label": "Пароль",
        "type": "password",
        "validation": {
          "required": false,
          "pattern": "",
          "max": ""
          }
        },
        {
        "label": "Чекбокс",
        "type": "checkbox",
        "validation": {
          "required": false,
          "pattern": "",
          "max": ""
          }
        },
        {
        "label": "Номер телефона",
        "type": "phone",
        "validation": {
          "required": false,
          "pattern": "",
          "max": ""
          }
        },
        {
        "label": "Выпадающий список",
        "type": "select",
        "validation": {
          "required": false,
          },
        "options": []
        }
      ]
    }
  },
  methods:{
    deleteProperty(index){
      if(this.schema.fields.length > 1){
        this.schema.fields.splice(index, 1);
      }
    },
    showProperty(property){
      if(this.selectedItem != property){
        this.selectedItem = property;
      }else{
        this.selectedItem = null;
      }
    },
    setShortDescription(value, key){
      for (const index in this.controls) {
        if (Object.hasOwnProperty.call(this.controls, index)) {
          const element = this.controls[index];

          if(element.type == value){
            value = element.label
          }
          
        }
      } 

      if(value && key){
        return value + ':' + key;
      }

      if(value){
        return value;
      }
      if(key){
        return key;
      }

    }
  },
  computed:{
    showBtnDelete(){
      if(this.schema.fields.length > 1){
        return true
      }else{
        return false
      }
    }
  }
}

</script>

<style lang='scss' scoped>

</style>