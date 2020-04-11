<template lang="pug">
  v-row(justify="center")
    v-col(cols="12" md="10")
      v-row(justify="center")
        v-col(cols="12" md="10").pa-1.mb-3
          img(
            src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE Logo"
          ).link-to-home.mb-3
          br
          h2.primary--text Specialized Clinic: Sign Up (Step 1 of 3)
          h1.font-work-sans Choose your specialized clinic:
      v-row(justify="center" dense)
        v-col(
          v-for="(type, key) in specializedTypes"
          :key="key"
          cols="12"
          md="2"
        )
          v-card(
            hover
            :flat="!type.selected"
            width="100%"
            height="100%"
            :color="cardColor(type)"
            :class="[{'black--text': type.selected}]"
            @mouseover="onMouseOver(type.value)"
            @mouseout="hoveredClinic = ''"
          ).clinic-card
            div(@click="toggleType(type)")
              div.check-container.text-right
                img(
                  v-if="type.selected"
                  src="~/assets/images/mycure-web-bullet-check.png"
                  width="10%"
                  alt="Check"
                ).mt-1.mr-1
              v-card-text
                div.text-center
                  img(
                    :src="require(`~/assets/images/${type.image}${(type.selected || hoveredClinic === type.value ) ? '-active' : '' }.png`)"
                    :alt="type.image"
                    width="80%"
                  )
              v-card-text.text-center.card-title-container
                h2(:class="[$isMobile ? 'font-m' : 'font-16']") {{ type.title }}
              v-card-text.px-2.inclusions-container.grow
                p The trial includes:
                v-row(no-gutters).checklist-item
                  template(v-for="(item, key) in type.checklist")
                    v-col(cols="1")
                      span(:class="{'primary--text': type.selected}") ✓&nbsp;
                    v-col(cols="11")
                      | {{ item }}
            v-card-actions.clinic-card-actions
              v-btn(
                color="primary"
                medium
                text
                @click="viewDetails(type)"
              ).font-weight-bold.details-btn View Details
        v-col(cols="12" md="10").pa-1.mt-3
          v-card(flat)
            v-card-actions(
              :class="dayOrNight === 'night' ? 'night-card-actions' : 'day-card-actions'"
            )
              v-spacer
              v-btn(
                color="accent"
                :disabled="loading || !selectedType.value"
                @click="onProceed"
                large
              ).font-weight-bold Proceed
    specialized-clinic-details-dialog(
      v-model="detailsDialog"
      :clinic="viewClinicModel"
    )
    v-snackbar(
      color="accent"
      v-model="added"
      :timeout="1000"
    ) {{toggledType}} Selected!
    v-snackbar(
      v-model="removed"
      :timeout="1000"
    ) {{toggledType}} Removed!
    v-snackbar(
      v-model="errorSnack"
      color="error"
      :timeout="1000"
    ) {{ errorMessage }}
</template>

<script>
import { SPECIALIZED_CLINIC_TYPES } from '~/components/signup-specialized/constants';
import dayOrNight from '~/utils/day-or-night';
import { MODULE_AVAILABILITY_MAPPINGS } from '~/utils/subscriptions';
import headMeta from '~/utils/head-meta';
// - components
import SpecializedClinicDetailsDialog from '~/components/signup-specialized/specialized-clinic-details-dialog';

export default {
  layout: 'user',
  components: {
    SpecializedClinicDetailsDialog,
  },
  data () {
    this.dayOrNight = dayOrNight();
    return {
      added: false,
      removed: false,
      errorSnack: false,
      loading: false,
      stripeCheckoutSessionId: '',
      // - dialogs
      emailVerificationMessageDialog: false,
      detailsDialog: false,
      // - models
      user: {},
      toggledType: {},
      selectedType: {},
      selectedClinicTypeModulesMapping: {},
      viewClinicModel: {},
      hoveredClinic: '',
      errorMessage: '',
      // - enum
      specializedTypes: SPECIALIZED_CLINIC_TYPES,
    };
  },
  mounted () {
    this.selectedType = {};
    this.specializedTypes.map((type) => {
      type.selected = false;
      return type;
    });
  },
  methods: {
    onProceed () {
      this.loading = true;
      if (!this.selectedType?.value) {
        this.errorMessage = 'Please select a type of clinic service';
        this.errorSnack = true;
        return;
      }
      this.user.clinicType = this.selectedType.value;
      this.saveModel(this.user);
      this.$nuxt.$router.push({ name: 'signup-specialized-step-2' });
    },
    saveModel (val) {
      const saveVal = {
        ...val,
        subscription: {
          trial: true,
          storageMax: 1,
          doctorSeatsMax: 1,
          staffSeatsMax: 1,
          ...this.selectedClinicTypeModulesMapping,
        },
      };
      if (process.browser) {
        localStorage.setItem('specialized:step1:model', JSON.stringify(saveVal));
      }
    },
    onMouseOver (clinicValue) {
      this.hoveredClinic = clinicValue;
    },
    toggleType (type) {
      type.selected = !type.selected;
      if (type.selected) {
        this.selectedType = type;
        this.selectedClinicTypeModulesMapping = MODULE_AVAILABILITY_MAPPINGS[type.value];
        this.specializedTypes = this.specializedTypes
          .map((item) => {
            if (item.title !== type.title) {
              item.selected = false;
            }
            return item;
          });
      } else {
        this.selectedType = {};
        this.selectedClinicTypeModulesMapping = {};
      }
      this.showToast(type);
    },
    viewDetails (type) {
      this.viewClinicModel = type;
      this.detailsDialog = true;
    },
    showToast (type) {
      this.toggledType = type.title;
      type.selected ? this.added = true : this.removed = true;
    },
    cardColor (type) {
      if (this.dayOrNight === 'night') {
        return type.selected ? 'white' : 'black';
      } else {
        return type.selected ? 'white' : '#f0f0f0';
      }
    },
  },
  head () {
    return headMeta({
      title: 'Start Free Trial: MYCURE Clinic Management System for Specialized Clinics',
      description: 'Customize your clinic system for skin and aesthetics, maternity care, pediatrics, dentistry, or diagnostics. Start your 14-day trial now!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
.day-card-actions {
  background-color: #fafafa;
}
.night-card-actions {
  background-color:  rgb(28,28,28);
}
.link-to-home:hover {
  cursor: pointer;
}
.check-container {
  min-height: 5vh;
}
.clinic-card {
  position: relative;
  padding-bottom: 30px;
}
.clinic-card:hover {
  background-color: white !important;
  color: black;
  cursor: pointer;
}
.clinic-card-actions {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.card-title-container {
  min-height: 75px;
}
.checklist-item {
  line-height: 3vh !important;
}
.details-btn {
  width: 100%
}
@media screen and (min-height: 550px) {
  .card-title-container {
    min-height: 60px !important;
  }
}
@media screen and (min-height: 1080px) {
  .check-container {
    min-height: 60px !important;
  }
}
</style>
