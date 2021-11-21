<template>
  <div class="page">
    <div class="container">      
      <h1 class="title">Мои схемы</h1>
      <div v-if="!list" class="loading">Загрузка...</div>      
      <SchemesList v-else :list="list"/>
    </div>
  </div>
</template>

<script>
import SchemesList from '@/components/SchemesList'
import fetchData from '@/mixins/fetchData'
export default {
  mixins: [fetchData],
  components: {SchemesList},
  data(){
    return{
      list: null
    }
  },
  mounted(){
    this.fetchData('http://193.124.206.217:3000/form')
        .then(response => {
          this.list = response;
        })
        .catch(error => {
          console.log(error);
        });
  }
}

</script>