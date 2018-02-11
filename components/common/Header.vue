<template>
  <div>
    <header class="header">
      <div class="inner">
        <nav>
          <ul class="navi">
            <li class="navi__item"><router-link class="link" to="about">About</router-link></li>
            <li class="navi__item"><router-link class="link" to="residents">Residents</router-link></li>
            <li class="navi__item"><router-link class="link" to="photo">Photo</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header {
  font-family: 'Muli', sans-serif;
  font-weight:200;
  font-size:1.6rem;
  background-color: rgba(255, 255, 255, .6);
  width: 100%;
  height: 60px;
}
.inner {
  width: 640px;
  margin: auto;
}
.navi {
  display: flex;
  justify-content: flex-end;
  height: 60px;
  margin: 0;
  padding: 0;
}
.navi__item {
  list-style: none;
}
.link {
  display: block;
  color: #575757;
  text-align: center;
  text-decoration: none;
  width: 146px;
  height: 60px;
  padding-top: 26px;
  box-sizing: border-box;
}
@media (min-width: 641px) {
  .inner {
    width: 960px;
  }
}
</style>
