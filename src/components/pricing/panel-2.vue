<template>
  <div id="prices">
    <pre v-if="!$isProduction()" class="panel-number">2</pre>
    <div class="panel-2 pt-5 pb-5">
      <div class="container fluid">
        <div class="row justify-content-md-center">
          <div class="col col-xs-12 col-md-12 text-center">
            <center>
              <div class="hr-blue">
              </div>
              <br>
              <h1>Schedule a Demo</h1>
              <br>
              <p>
                <b>Get to see what you need in action.</b>
              </p>
              <br>
              <img src="../../assets/images/v4/coffee.png" alt="" :class="{'animate': scrollTop > 300, 'coffee': true}">
            </center>
          </div>
          <div class="col col-xs-12 col-md-12">
            <div 
              class="row justify-content-md-center shadow-3 pl-3 pr-3 pt-5 pb-5" 
              style="background-color: snow">
              <div class="col col-xs-12 col-md-10">
                <div style="height: 400px;" class="pl-2 pr-2">
                  <form @submit.prevent="submit">
                    
                    <div class="row mt-5 mb-5">
                      <div class="col col-xs-12 col-md-4">
                        <label class="input-label">Please select your clinic type:</label>
                        <b-select v-model="payload.organization.type" :options="clinicTyes" required></b-select>
                      </div>
                      <div class="col col-xs-12 col-md-4">
                        <input v-model="payload.organization.name" type="text" class="form-control" placeholder="Clinic name" style="margin-top: 32px;" required>
                      </div>
                    </div>
                    
                    <div class="row mb-4">
                      <div class="col col-xs-12 col-md-4">
                        <input type="text" class="form-control" placeholder="Additional modules" @focus="openModulesModal" required>
                      </div>
                      <div class="col col-xs-12 col-md-4">
                        <input v-model="payload.organization.subscription.numberOfDoctors" type="number" class="form-control" placeholder="No. of clinic staff" required>
                      </div>
                      <div class="col col-xs-12 col-md-4">
                        <input v-model="payload.organization.subscription.numberOfPatients" type="number" class="form-control" placeholder="Est. patients per year" required>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <div class="col col-xs-12 col-md-4">
                        <input v-model="payload.name.firstName" type="text" class="form-control" placeholder="Your name" required>
                      </div>
                      <div class="col col-xs-12 col-md-4">
                        <input v-model="payload.role" type="text" class="form-control" placeholder="Your designation" required>
                      </div>
                      <div class="col col-xs-12 col-md-4">
                        <input v-model="payload.dateTimeToCall" type="text" class="form-control" placeholder="Best day and time to call" required>
                      </div>
                    </div>

                    <div class="row mb-5">
                      <div class="col col-xs-12 col-md-6">
                        <input v-model="payload.email" type="text" class="form-control" placeholder="Email address" required>
                      </div>
                      <div class="col col-xs-12 col-md-6">
                        <input v-model="payload.mobileNo" type="text" class="form-control" placeholder="Mobile number" required>
                      </div>
                    </div>

                    <div class="row justify-content-md-center mb-4">
                      <div class="col col-xs-12 col-md-5">
                        <button type="submit" class="btn btn-primary btn-block">BOOK A DEMO</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });
    },
    data() {
      return {
        scrollTop: 0,
        payload: {
          email: '',
          name: {
            firstName: '',
            lastName: ''
          },
          doc_PRCLicenseNo: '',
          mobileNo: '',
          role: 'Administrator',
          organization: {
            type: 'Multispecialty Clinics',
            superadmin: {
              roles: ['doctor']
            },
            name: '',
            subscription: {
              numberOfDoctors: null,
              numberOfStaff: null,
              plan: 'plan_liberica'
            }
          }
        },
        clinicTyes: [
          {
            text: 'Multispecialty Clinics',
            value: 'Multispecialty Clinics'
          },
          {
            text: 'Outpatient Clinics',
            value: 'Outpatient Clinics'
          },
          {
            text: 'Industrial Clinics',
            value: 'Industrial Clinics'
          },
          {
            text: 'Skin and Aesthetic Clinics',
            value: 'Skin and Aesthetic Clinics'
          },
          {
            text: 'PME Clinics',
            value: 'PME Clinics'
          },
          {
            text: 'Group Clinics',
            value: 'Group Clinics'
          },
          {
            text: 'Individual Clinics',
            value: 'Individual Clinics'
          }
        ]
      }
    },
    methods: {
      submit() {
        console.log(this.payload);
      },
      openModulesModal() {
        
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>

  .input-label {
    color: grey;
  }

  ul {
    list-style-type: none; 
    padding: 0; 
    margin: 0;
    background-color: #e0e0e0;
    padding: 10px;
  }

  .panel-2 {
    background-image: url('../../assets/images/v4/mycure-homepage-background-wood.png');
    background-repeat: repeat;
  }

  .coffee {
    display: none;
  }

  @media (min-width: 576px) {
    .coffee {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .coffee {
      display: inline;
      width: 250px;
      position: absolute;
      left: -500px;
      top: -120px;
      -webkit-transition: left 500ms; /* Safari */
      transition: left 500ms;
    }

    .coffee.animate {
      left: -50px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>

