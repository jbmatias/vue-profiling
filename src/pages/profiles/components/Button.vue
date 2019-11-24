<template>
  <button class="btn btn-lg btn-success" @click="logProfile">log profiles</button>
</template>
<script>
export default {
  methods: {
    logProfile() {
      console.log(this.$parent.$parent.profiles)
    }
  }
}
</script>
