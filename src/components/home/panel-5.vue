  <template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 4
    div.panel-5.pt-5
      div.container
        div.row.align-items-center
          div.col-xs-12.col-md-12.text-center
            img(src="../../assets/images/v4/mycure-modules-white-envelope.png" :class="{animate: scrollTop > 3100}").envelope
            img(src="../../assets/images/v4/mycure-modules-notepad.png" :class="{animate: scrollTop > 3800}").notepad
            center
              div.hr-blue
            br
            h1 Why MYCURE?
            br
            div.row
              div.col-xs-12.col-md-4.text-left.pt-2.pb-2.pl-2.pr-2
                div.bg-white.pt-2.pb-2.pl-2.pr-2.shadow-3
                  h2.color-primary {{'Patient-focused'}}
                  p Your patients are our top priority.
                  br
                  div(style="height: 130px;").mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-patient-care.png")
                    h5 Better patient care
                    p Retrieve your patients’ medical records anytime you need to.
                  div.mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-secure.png")
                    h5 Secure medical data
                    p We perform industry standard encryption to protect your patient records.
                  div.mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-uptodate.png")
                    h5 Up-to-date information
                    p Create updated and accurate medical records for your patients’ safety.
              div.col-xs-12.col-md-4.text-left.pt-2.pb-2.pl-2.pr-2
                div.bg-white.pt-2.pb-2.pl-2.pr-2.shadow-3
                  h2.color-primary Business-friendly
                  p Get the best on your investments.
                  br
                  div(style="height: 130px;").mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-cost-effective.png")
                    h5 Cost-effective system
                    p Get highly reduced operating expenses with automated record-keeping.
                  div.mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-productive.png")
                    h5 Increased productivity
                    p Double your clinic efficiency, staff productivity and involvement.
                  div.mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-prestige.png")
                    h5 Added Prestige
                    p Be a premium healthcare provider with an advanced EMR system.
              div.col-xs-12.col-md-4.text-left.pt-2.pb-2.pl-2.pr-2
                div.bg-white.pt-2.pb-2.pl-2.pr-2.shadow-3
                  h2.color-primary Flexible technology
                  p MYCURE is engineered for your convenience.
                  br
                  div(style="height: 130px;").mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-upgrades.png")
                    h5 Painless upgrades
                    p Easily explore new features from regular product upgrades without the technical hassle.
                  div.mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-storage.png")
                    h5 Optimized file storage
                    p Store and retrieve records anytime without stacking everything in your physical cabinets.
                  div.mb-5
                    img(width="40" src="../../assets/images/v4/mycure-homepage-benefits-support.png")
                    h5 Hands-on support
                    p We hire humans (not bots) to provide you with technical assistance and awesome care!
            
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
        scrollTop: 0
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-5 {
    background-image: url('../../assets/images/v4/mycure-homepage-background-wood.png');
    background-repeat: repeat;
    padding-bottom: 100px;
  }
  
  .envelope {
    width: 400px;
    position: absolute;
    left: -1000px;
    top: 30px;
    -webkit-transition: left 500ms;
    transition: left 500ms;
  }
  
  .envelope.animate {
    left: -390px;
  }
  
  .notepad {
    width: 300px;
    position: absolute;
    right: -1000px;
    bottom: -500px;
    -webkit-transition: right 500ms;
    transition: right 500ms;
  }
  
  .notepad.animate {
    right: -300px;
  }
</style>