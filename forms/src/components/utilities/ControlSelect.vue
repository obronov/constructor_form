<template>
  <div class="control-select">
    <label class="control-label" v-if="{'control-label_error': error}">
      <span class="control-label__star" v-if="options.validation.required">*</span> 
      {{options.label}}
    </label>
    <input class="control-select__output" :name="options.key" type="text" readonly  :value="label">
    <div class="control-select__drop-down">
      <label v-for="(item, index) in options.options" :key="index">
        <div class="">{{item.value}}</div>
        
        <input class="control-select__option" :name="options.key" :value="item.key" v-model="checkedNames" type="radio" @input="$emit('oninput', item)">
      </label>
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
