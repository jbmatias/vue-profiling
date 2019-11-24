<template>
  <b-row>
    <b-col md="6" class="offset-md-3">
      <b-form>
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" type="text" v-model="name">
        </div>
        <div class="form-group">
          <label for="name">Age</label>
          <input class="form-control" type="text" v-model="age">
        </div>
        <div class="form-group">
          <label for="name">Address</label>
          <input class="form-control" type="text" v-model="address">
        </div>
        <div class="form-group">
          <label for="name">Occupation</label>
          <input class="form-control" type="text" v-model="occupation">
        </div>
        <div class="form-group text-right">
          <button type="button" class="btn btn-secondary mr-2" @click="resetMode">Reset</button>
          <button v-show="!mode" type="submit" class="btn btn-primary" @click="addPerson($event)">Add person</button>
          <button v-show="mode" type="button" class="btn btn-primary" @click="updatePerson">Update person</button>
        </div>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data()
  {
    return {
      name: 'Jerome Matias',
      age: '19',
      address: 'bxu',
      occupation: 'dev',
      mode: 0
    }
  },
  methods: {
    updatePerson()
    {
      this.$parent.profiles[this.$parent.$refs.ProfileList.activeIndex].name = this.name
      this.$parent.profiles[this.$parent.$refs.ProfileList.activeIndex].age = this.age
      this.$parent.profiles[this.$parent.$refs.ProfileList.activeIndex].address = this.address
      this.$parent.profiles[this.$parent.$refs.ProfileList.activeIndex].occupation = this.occupation
      this.resetMode()
    },
    addPerson(e)
    {
      let btn = e.target
      let defaultText = btn.innerHTML
      btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> loading..'
      btn.disabled = true

      let person = {
        name: this.name,
        age: this.age,
        address: this.address,
        occupation: this.occupation
      }

      this.$parent.profiles.push(person)
      this.resetMode()
      setTimeout(() => {

        btn.innerHTML = defaultText
        btn.disabled = false
      },1000)
    },
    resetMode()
    {
      this.mode = 0
      this.name = ''
      this.age = ''
      this.address = ''
      this.occupation = ''
    }
  }
}
</script>
