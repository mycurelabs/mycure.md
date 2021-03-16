<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '620px' }"
    )
      v-col(cols="12" md="5" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }").primary--text Make Healthcare Accessible to All
        p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }") THE&nbsp;
          span.primary--text SEVEN WONDERS&nbsp;
          | OF HEALTHCARE EMPOWERED BY MYCURE
      v-col(cols="12" md="6")
      v-col(cols="12")
        carousel(
          :per-page="1"
          :navigationEnabled="true"
          :adjustableHeight="true"
          :paginationEnabled="false"
          :navigationClickTargetSize="50"
          navigationNextLabel=" "
          navigationPrevLabel=" "
        )
          slide(:data-index="1")
            v-row
              v-col(
                v-for="(wonder, key) in wonders.slice(0, 4)"
                :key="key"
                cols="3"
                color="#fafafa"
                flat
              )
                v-card(flat color="#fafafa")
                  v-card-text.text-center
                    h1 {{ wonder.title }}
                    p {{ wonder.description }}
                  v-card-actions
                    v-btn(text small).text-none
                      | Learn More
                      v-icon(right small) mdi-chevron-right
                    v-spacer
                    v-btn(text small color="primary").text-none
                      | Buy Now
                      v-icon(right small) mdi-chevron-rigth
          slide(:data-index="2")
            v-row
              v-col(
                v-for="(wonder, key) in wonders.slice(4)"
                :key="key"
                cols="3"
                color="#fafafa"
                flat
              )
                v-card(flat color="#fafafa")
                  v-card-text.text-center
                    h1 {{ wonder.title }}
                    p {{ wonder.description }}
                  v-card-actions
                    v-btn(text small).text-none
                      | Learn More
                      v-icon(right small) mdi-chevron-right
                    v-spacer
                    v-btn(text small color="primary").text-none
                      | Buy Now
                      v-icon(right small) mdi-chevron-right
</template>

<script>
export default {
  data () {
    this.wonders = [
      {
        title: 'Physicians',
        description: 'Easily create digital medical records',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
      },
      {
        title: 'Diagnostics',
        description: 'Get simplified workflows, real-time reports',
      },
      {
        title: 'Pharmacy',
        description: 'Get simplified workflows, real-time reports',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
