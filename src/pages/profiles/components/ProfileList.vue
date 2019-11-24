<template>
  <b-row class="mt-4">
    <b-col md="10" class="offset-md-1">
      <Button></Button>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Occupation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in $parent.profiles" :key="index">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.address }}</td>
            <td>{{ person.occupation }}</td>
            <td>
              <b-button-group>
                <b-button variant="info" @click="changeMode(person, index)">update</b-button>
                <b-button variant="danger" @click="deletePerson(index)">delete</b-button>
              </b-button-group>
            </td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>
import Button from './Button'
export default {
  data()
  {
    return {
      activeIndex: null
    }
  },
  components: {Button},
  methods: {
    changeMode(person, index) {
      this.activeIndex = index
      this.$parent.$refs.ProfileForm.mode = 1
      this.$parent.$refs.ProfileForm.name = person.name
      this.$parent.$refs.ProfileForm.age = person.age
      this.$parent.$refs.ProfileForm.address = person.address
      this.$parent.$refs.ProfileForm.occupation = person.occupation
    },
    deletePerson(i)
    {
      this.$parent.profiles.splice(i,1)
    }
  }
}
</script>
