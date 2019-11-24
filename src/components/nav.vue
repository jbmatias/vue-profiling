<template>
  <b-tabs content-class="mt-3">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <router-link
        :to="{ name: 'home' }"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <li class="nav-item">
          <a class="nav-link"  :class="{ 'active' : isActive }" :href="href" @click="navigate">Home</a>
        </li>
      </router-link>
      <router-link
        :to="{ name: 'profiles' }"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <li class="nav-item">
          <a class="nav-link" :class="{ 'active' : isActive }" :href="href" @click="navigate">Profiles</a>
        </li>
      </router-link>
    </ul>
  </b-tabs>
</template>
<script>
export default {
  name: "Nav"
}
</script>
