<template>
  <div class="page">
    <div class="container">
      <div v-if="!schemaTemplate" class="loading">Загрузка...</div>
      <ViewSchema v-else :schemaTemplate="schemaTemplate"/>
    </div>
  </div>
</template>


<script>
import ViewSchema from '@/components/ViewSchema'
import fetchData from '@/mixins/fetchData'
export default {
  components: {ViewSchema},
  mixins: [fetchData],
  data(){
    return{
       schemaTemplate: null
    }
  },
  mounted(){
    this.fetchData(`http://193.124.206.217:3000/form/${this.$route.query.id}`)
        .then(response => {
          this.schemaTemplate = response;
        })
        .catch(error => {
          console.log(error);
        });
  }
}

</script>

<style lang='scss' scoped>

</style>