<template>
  <div class="create-schema">
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
          <button class="create-schema-items__btnExpand" type="button" @click="selectedItem = `item${index}`">
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.29289 4.29289L0.853553 0.853553C0.538571 0.538571 0.761654 0 1.20711 0H8.79289C9.23835 0 9.46143 0.53857 9.14645 0.853553L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289Z" fill="#272727"/>
            </svg>
          </button>
          <div class="create-schema-items__properties">
            <div class="create-schema-items__controls">
              <div class="create-schema-items__properties-name">
                <span>Свойство {{index + 1}}: </span> 
                <span>{{item.label}}</span>
              </div>
              <div class="create-schema-items__short-desc" v-if="selectedItem !== `item${index}`">{{setShortDescription(item)}}</div>
            
              <div class="create-schema-items__controls-items" v-if="selectedItem == `item${index}`">
                <ControlText class="control_create-schema" @oninput="(value) => item.key = value" :options="{
                  key: 'key_schema',
                  label: 'Ключ свойства',
                  value: item.key,
                  type: 'string',
                  validation: {
                    required: true
                    }
                }"/>
                <ControlText class="control_create-schema" @oninput="(value) => item.label = value" :options="{
                  key: 'name_properties',
                  label: 'Название свойства',
                  value: item.label,
                  type: 'string',
                  validation: {
                    required: true
                    }
                }"/>
                {{selectValue}}
                <!-- <ControlSelect class="control_create-schema" @onchange="(value) => selectValue = value" :options="{
                  key: 'select_properties',
                  label: 'Поле для отображения',
                  value: selectValue,
                  type: 'select',
                  validation: {
                    required: true
                    },
                  options: item.options
                }"/> -->
              </div>
              
            </div>

            <div class="create-schema-items__controls" v-if="selectedItem == `item${index}`">
              <div class="create-schema-items__properties-name">
                <span>Валидация</span> 
              </div>
            </div>
            
          </div>
          <button class="create-schema-items__btnDelete" type="button">
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
  </div>
</template>

<script>
import ControlText from '@/components/utilities/ControlText'
/* import ControlSelect from '@/components/utilities/ControlSelect' */
export default {
  components: {ControlText},
  props:{
    template: Object
  },
  data(){
    return{
      selectValue: '',
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
    setShortDescription(item){
      let text = '';
console.log('item', item)
      for (const index in this.controls) {
        if (Object.hasOwnProperty.call(this.controls, index)) {
          const element = this.controls[index];

          if(element.type == item.type){
            console.log('element', element)
            if(item.label){
              text = item.label + '; '
            }
            text += item.key
          }
          
        }
      }

      return text;
    }
  }
}

</script>

<style lang='scss' scoped>

</style>