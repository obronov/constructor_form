<template>
  <div>
      <div class="form-item" v-for="(item, index) in controls" :key="index">
        <ControlText v-if="item.type == 'string'" :options="item"/>
        <ControlNumber v-if="item.type == 'number'" :options="item"/>
        <ControlPassword v-if="item.type == 'password'" :options="item"/>
      </div>  
  </div>
</template>

<script>
import ControlText from '@/components/utilities/ControlText'
import ControlNumber from '@/components/utilities/ControlNumber'
import ControlPassword from '@/components/utilities/ControlPassword'
export default {
  components: {ControlText, ControlNumber, ControlPassword},
  props:{
    controls: Array
  }
}

</script>
