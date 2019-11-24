<template>
  <div id="app">
    <section>
      <div class="container">
        <NavBar></NavBar>
        <div class="row">
          <div class="col-md-8 offset-md-2 pt-4">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
