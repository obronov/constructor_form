<template>
  <div class="control-select">
    <div class="control-label" v-if="{'control-label_error': error}">
      <span class="control-label__star" v-if="options.validation.required">*</span> 
      {{options.label}}
    </div>
    <div class="control-select__wrap">
      <input class="control-select__output" :name="options.key" type="text" readonly  :value="label">
      <div class="control-select__drop-down">
        <label class="control-select__option" v-for="(item, index) in options.options" :key="index">        
          <input class="control-select__option-input" :name="options.key" :value="item.key" v-model="checkedNames" type="radio" @input="$emit('oninput', item)">
          <div>{{item.value}}</div>
        </label>
      </div>
    </div>
  </div>  
</template>

<script>

export default {
  props:{
    options: Object,
    error: Boolean
  },
  data(){
    return{
      checkedNames: '',
    }
  },
  computed:{
    label(){
      let label = '';
      let options = this.options.options;

      for (const index in options) {
        if (Object.hasOwnProperty.call(options, index)) {
          const element = options[index];

          if(element.key == this.checkedNames){
            label = element.value
          }
          
        }
      } 
      return label;
    }
  }
}

</script>
