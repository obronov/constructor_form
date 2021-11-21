<template>
  <div>
    <ul class="schemes-items">
      <li class="schemes-items__item" v-for="(item, index) in schemes" :key="index">
        <div class="scheme-item">
          <div class="scheme-item__name">{{item.schema.name}}</div>
          <router-link class="scheme-item__link" :to="{name: 'validation'}">Просмотреть</router-link>
          <router-link class="scheme-item__link" :to="{name: 'create', query:{id: item.id}}">Изменить</router-link>
          <button class="scheme-item__link" type="button">Удалить</button>
        </div>
      </li>
    </ul>
    <div class="schemes-btn">      
      <router-link class="btn btn_primary" :to="{name: 'create'}">Создать схему</router-link>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    list: Array
  },
  data(){
    return{
      schemes: this.list
    }
  }
}

</script>

