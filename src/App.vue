<template>
  <div class="app_container">
    <aside class="app_container--leftAside"></aside>
    <aside class="app_container--rightAside">
      <h1>Проведение ТО и мелкий ремонт</h1>
      <nav>
        <router-link to="/">Общее</router-link> |
        <router-link to="/writeOffItem">Товар списания</router-link> |
        <router-link to="/addExpenses">Доп. расходы</router-link>
      </nav>
      <router-view/>
    </aside>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app_container {
  display: flex;
  justify-content: space-between;
  background-color: #fbfcfd;
}

.app_container--leftAside {
  width: 12%;
  height: 100vh;
  background-image: radial-gradient(circle at 29% 0, #000, #1c2734 103%);
}

.app_container--rightAside {
  width: 88%;
  padding: 25px;
}

.app_container--rightAside h1 {
  margin-bottom: 25px;
  font-family: MyriadPro;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
}


nav {
  margin-bottom: 25px;
}

nav a {
  
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
