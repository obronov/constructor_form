<template>
  <div class="control">
    <label class="control-label" v-if="{'control-label_error': error}"><span class="control-label__star" v-if="options.validation.required">*</span> {{options.label}}</label>
    <input class="control-input" v-if="{'control-input_error': error}" :name="options.key" type="text" :value="options.value" @input="$emit('oninput', $event.target.value)">
  </div>
</template>

<script>

export default {
  props:{
    options: Object,
    error: Boolean
  }
}

</script>
