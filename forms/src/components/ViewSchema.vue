<template>
  <div class="form-validation">
    <div class="title">{{schemaTemplate.schema.name}}</div>
    <ControlsList :controls="schemaTemplate.schema.fields"/>
    <Btn 
        @clickBtn="saveShema()"
        :options="{
          type:'button',
          disabled: false
        }"
      >Валидация</Btn>
  </div>
</template>

<script>
import Btn from '@/components/utilities/Btn'
import ControlsList from '@/components/ControlsList'
export default {
  components: {ControlsList, Btn},
  props:{
    schemaTemplate: Object
  }
}

</script>

<style lang='scss' scoped>

</style>