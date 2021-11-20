<template>
  <div>
    <button class="btn btn_primary" 
      :class="{btn_primary: options.modifier == 'primary',btn_secondary: options.modifier == 'secondary'}" 
      :type="options.type" 
      :disabled="options.disabled" 
      @click="$emit('clickBtn')">
      <slot></slot>
    </button>
  </div>
</template>

<script>

export default {
  props:{
    options: Object
  }
}

</script>

