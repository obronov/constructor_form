<template>
  <form class="create-schema" method="post" action="/">
    <div class="create-schema__header">      
      <h1 class="title title_create-schema-header">Новая схема</h1>
      <ControlText         
        @oninput="(value) => schema.name = value"
        :options="{
          key: 'name_schema',
          label: 'Название схемы',
          value: schema.name,
          type: 'string',
          validation: {
            required: true
          }
        }" 
      />
    </div>
    <div class="create-schema__main">
      <h2 class="title title_create-schema-main">Свойства схемы</h2>
      <p class="create-schema__description">Схема должна содержать хотя бы одно свойство</p>
      <ul class="create-schema-items">
        <li class="create-schema-items__item" 
          v-for="(item, index) in schema.fields" :key="`item${index}`"
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
              <div class="create-schema-items__short-desc" :class="{'create-schema-items__short-desc_opened': selectedItem == `item${index}`}">{{setShortDescription(item[2].value, item[0].value)}}</div>
              <div class="create-schema-items__controls-items" v-show="selectedItem == `item${index}`">
                <ControlText class="control_create-schema" 
                  @oninput="(value) => item[0].value = value" 
                  :options="{
                    key: item[0].key,
                    label: item[0].label,
                    value: item[0].value,
                    type: item[0].type,
                    validation: item[0].validation
                  }"/>
                <ControlText class="control_create-schema" 
                  @oninput="(value) => item[1].value = value" 
                  :options="{
                    key: item[1].key,
                    label: item[1].label,
                    value: item[1].value,
                    type: item[1].type,
                    validation: item[1].validation
                  }"/>
                <ControlSelect class="control_create-schema" 
                  @oninput="(option) => item[2].value = option.key" 
                  :options="{
                    key: item[2].key + index,
                    label: item[2].label,
                    value: item[2].value,
                    type: item[2].type,
                    validation: item[2].validation,
                    options: item[2].options
                  }"/>
              </div>
              
            </div>

            <div class="create-schema-items__controls" v-show="selectedItem == `item${index}`">
              <div class="create-schema-items__properties-name" v-show="item[2].value">
                <span>Валидация</span> 
              </div>
              <div class="create-schema-validation-required" v-show="item[2].value">
                  <ControlRequired 
                    @oninput="setValueOptions($event, item[2].value, index, 'required')" 
                    :options="{
                      key: `required${index}`,
                      label: 'Обязательно для заполнения',
                      value: getValueOptions(item[2].value, index, 'required'),
                      type: 'checkbox',
                      validation: {}
                    }"/>
              </div>
              <div class="create-schema-validation-min-max" v-show="item[2].value == 'string' || item[2].value == 'number' || item[2].value == 'password'">
                <ControlText 
                  @oninput="setValueOptions($event, item[2].value, index, 'min')" 
                  :options="{
                    key: `min${index}`,
                    label: 'Мин. кол-во символов',
                    value: getValueOptions(item[2].value, index, 'min'),
                    type: 'string',
                    validation: {}
                  }"/>
                <ControlText 
                  @oninput="setValueOptions($event, item[2].value, index, 'max')" 
                  :options="{
                    key: `max${index}`,
                    label: 'Макс. кол-во символов',
                    value: getValueOptions(item[2].value, index, 'max'),
                    type: 'string',
                    validation: {}
                  }"/>
              </div>
              <div class="create-schema-validation-pattern" v-show="item[2].value == 'string' || item[2].value == 'password'">
                <ControlText 
                  @oninput="setValueOptions($event, item[2].value, index, 'pattern')" 
                  :options="{
                    key: `pattern${index}`,
                    label: 'Шаблон ввода',
                    value: getValueOptions(item[2].value, index, 'pattern'),
                    type: 'string',
                    validation: {}
                  }"/>
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
      <div class="create-schema__add-save">
        <Btn 
          @clickBtn="addProperty()"
          class="create-schema__add" 
          :options="{
            type:'button',
            modifier:'secondary',
            disabled: false
          }"
        >Добавить новое свойство</Btn>
        <Btn 
          @clickBtn="saveShema()"
          class="create-schema__save" 
          :options="{
            type:'button',
            disabled: false
          }"
        >Сохранить схему</Btn>
      </div>
    </div>
  </form>
</template>

<script>
import ControlText from '@/components/utilities/ControlText'
import ControlSelect from '@/components/utilities/ControlSelect'
import ControlRequired from '@/components/utilities/ControlRequired'
import Btn from '@/components/utilities/Btn'
import sendData from '@/mixins/sendData'
export default {
  mixins: [sendData],
  components: {ControlText, ControlSelect, ControlRequired, Btn},
  props:{
    template: Object
  },
  data(){
    return{

      selectedItem: null,
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
    addProperty(){
      let field =[
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

      this.schema.fields.push(field)
    },
    saveShema(){
      let template = {
        "name": "",
        "fields": []
      };
      template.name = this.schema.name;

      this.schema.fields.forEach(property => {
        let item = {
          "key": "",
          "label": "",
          "type": "",
          "validation": {}
        }
        property.forEach(element => {

          if(element.key == 'key_schema'){
            item.key = element.value
          }
          if(element.key == 'name_properties'){
            item.label = element.value
          }
          if(element.key == 'select_properties'){
            item.type = element.value

            for (const key in element.options) {
              if (Object.hasOwnProperty.call(element.options, key)) {
                const option = element.options[key];
                if(element.value == option.key){
                  item.validation = option.validation
                }
              }
            }
          }

        });

        template.fields.push(item);

      });
        
        let data = {};
        data.schema = template;
        
        this.sendData('http://193.124.206.217:3000/form', JSON.stringify(data) )
        .then(response => {
          console.log('response ', response);
          this.$router.push('schemes');
        })
        .catch(error => {
          console.log('Ошибка сохранения] ', error);
        });

    },
    getValueOptions(key, index, typeValidation){
      let value = '';

      this.schema.fields[index].forEach(element => {
        if(element.type == 'select') {
          element.options.forEach(item => {
            if(item.key == key){
             value = item.validation[typeValidation];
            }
          });
        }
      });

      return value;
    },
    setValueOptions(value, key, index, typeValidation){
      this.schema.fields[index].forEach(element => {
        if(element.type == 'select') {
          element.options.forEach(item => {
            if(item.key == key){              
              item.validation[typeValidation] = value;
            }          
          });
        }        
      });

    },
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