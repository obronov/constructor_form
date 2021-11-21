<template>
  <div class="page create">
    <div class="container">
      <CreateSchemes :template="schema"/>
    </div>    
  </div>
</template>

<script>
import CreateSchemes from '@/components/CreateSchemes'
export default {
  components: {CreateSchemes},
  data(){
    return{
      "schema": {
        "name": "",
        "fields": [
          {
            "key": "",
            "type": "string",
            "label": "",
            "validation": {
                "min": '',
                "max": '',
                "required": false
            }
          }
        ]
      }
    }
  }
}

</script>