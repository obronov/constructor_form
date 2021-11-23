<template>
  <div class="control-required">
    <label class="control-required__label" :class="{active: options.value}">
      <input class="control-required__input" :name="options.key" :checked="options.value" :type="options.type"   @input="options.value= !options.value; $emit('oninput', options.value)">
    </label>
    <div class="control-required__caption">{{options.label}}</div>
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
