<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="6")
        template(v-for="service in services")
          v-card
            img(
              :src="services.image"
              alt="services"
            )
            v-card-title {{ services.title }}
            v-card-subtitle {{ services.description }}
</template>
