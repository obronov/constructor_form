<template>
  <div class="control-select">
    <input class="control-select__output" :name="options.key" type="text" readonly  :value="options.value" @change="$emit('onchange', checkedNames)">
    <div class="control-select__drop-down">
      <label v-for="(item, index) in options.options" :key="index">
        <div>{{item.value}}</div>
        <div>{{item.key}}</div>
        <div>{{checkedNames}}</div>
        <input class="control-select__option" :name="item.key" :value="item.key" v-model="checkedNames" type="radio">
      </label>
    </div>
  </div>
   <!--  <select class="control-select" :name="options.key"  v-model="options.value" @input="$emit('oninput', $event.target.value)">
      <option :value="item.value"  :name="item.key" v-for="(item, index) in options.options" :key="index">{{item.value}}</option>
    </select> -->

    <!-- <label class="control-label" v-if="{'control-label_error': error}"><span class="control-label__star" v-if="options.validation.required">*</span> {{options.label}}</label>
    <input class="control-input" v-if="{'control-input_error': error}" :name="options.key" type="text" v-model="options.value" @input="$emit('oninput', $event.target.value)"> -->
  
</template>

<script>

export default {
  props:{
    options: Object,
    error: Boolean
  },
  data(){
    return{
      checkedNames: ''
    }
  }
}

</script>
