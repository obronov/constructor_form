<template>
  <div class="page create">
    <div class="container">
      <CreateSchemes/>
    </div>    
  </div>
</template>

<script>
import CreateSchemes from '@/components/CreateSchemes'
export default {
  components: {CreateSchemes},
  data(){
    return{
      list:[
        
      ]
    }
  }
}

</script>