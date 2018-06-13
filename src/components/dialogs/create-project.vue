<template lang="pug">
  v-dialog(v-model="dialog2" width="400")
    form
      v-card
        v-toolbar
        v-card-text 
          v-text-field(v-model="project.name" type="text" label="Project Name")      
        v-card-actions
          v-spacer
          v-btn(flat) Create
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    props: {
      dialog: Boolean
    },
    data() {
      return {
        dialog2: this.dialog,
        loading: false,
        project: {
          name: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/authUser'
      })
    },
    methods: {
      ...mapActions({
        createProject: 'project/createProject'
      }),
      async submit() {
        try {
          this.project.createdBy = this.authUser.uid;
          await this.createProject(this.project);
        } catch (e) {
          
        }
      }
    },
    watch: {
      dialog(val) {
        this.dialog2 = val;
      },
      dialog2(val) {
        if (!val) {
          this.$emit('close', false);
        }
      }
    }
  }
</script>