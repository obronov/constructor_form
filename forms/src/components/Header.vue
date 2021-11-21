<template>
  <header class="header">
    <div class="header__inner container">
      <div class="header__logo">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2629 23.7637L13.4634 33.2487V43.3086L32.2629 33.8236V23.7637Z" fill="#1390E5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4634 14.2793L32.2629 23.7643V33.8242L13.4634 24.3392V14.2793Z" fill="#1180CB"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2629 4.79492L13.4634 14.28V24.3398L32.2629 14.8548V4.79492Z" fill="#35A2EC"/>
        </svg>
      </div>
      <nav class="nav">
        <ul class="nav-items">
          <li class="nav-items__item">
            <router-link class="link nav-items__link" to="/create">Создать схему</router-link>
          </li>
          <li class="nav-items__item">
            <router-link class="link nav-items__link" to="/schemes">Мои схемы</router-link>
          </li>
        </ul>
      </nav>
      <button class="link btnLogout" type="button">Выйти</button>
    </div>
  </header>
</template>

<script>

export default {
  data(){
    return{      
      
    }
  }
}

</script>

<style lang='scss' scoped>

</style>