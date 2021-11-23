<template>
  <div>
    <ul class="schemes-items">
      <li class="schemes-items__item" v-for="(item, index) in schemes" :key="index">
        <div class="scheme-item">
          <div class="scheme-item__name">{{item.schema.name}}</div>
          <router-link class="scheme-item__link" :to="{name: 'validation', query:{id: item.id}}">Просмотреть</router-link>
          <router-link class="scheme-item__link" :to="{name: 'create', query:{id: item.id}}">Изменить</router-link>
          <button class="scheme-item__link" type="button" @click="deleteItem(item.id)">Удалить</button>
        </div>
      </li>
    </ul>
    <div class="schemes-btn">      
      <router-link class="btn btn_primary" :to="{name: 'create'}">Создать схему</router-link>
    </div>
  </div>
</template>

<script>
import deleteShema from '@/mixins/deleteShema'
export default {
  mixins: [deleteShema],
  props:{
    list: Array
  },
  data(){
    return{
      schemes: this.list
    }
  },
  methods:{
    deleteItem(id){
      this.deleteShema(`http://193.124.206.217:3000/form/${id}`)
      .then(() => {
        this.schemes.forEach((element, index) => {
          if(element.id == id){
            this.schemes.splice(index, 1)
          }
        });

      })
      .catch(error => {
        console.log('Ошибка сохранения] ', error);
      });
    }
  }
}

</script>

