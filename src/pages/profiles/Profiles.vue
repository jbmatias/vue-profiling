<template>
  <section>
    <ProfileForm ref="ProfileForm"></ProfileForm>
    <ProfileList ref="ProfileList"></ProfileList>
  </section>
</template>
<script>
import ProfileForm from './components/ProfileForm'
import ProfileList from './components/ProfileList'
export default {
  name: "Profiles",
  data()
  {
    return {
      profiles: []
    }
  },
  components: { ProfileForm, ProfileList },
  methods: {
    
  }
}
</script>
