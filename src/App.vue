<template>
  <v-app>
    <NavigationTop />

    <SearchFront />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import SearchFront from './components/shared/search-front'
import Footer from './components/shared/footer'
import NavigationTop from './components/shared/navigation-top'

export default {
  name: 'App',
  components: {
    SearchFront,
    Footer,
    NavigationTop
  },
  data () {
    return {
      
    }
  }
}
</script>
