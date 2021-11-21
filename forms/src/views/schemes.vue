<template>
  <div class="page">
    <div class="container">      
      <h1 class="title">Мои схемы</h1>
      <SchemesList  :list="list"/>
    </div>
  </div>
</template>

<script>
import SchemesList from '@/components/SchemesList'
export default {
  components: {SchemesList},
  data(){
    return{
      list:[
        
      ]
    }
  }
}

</script>