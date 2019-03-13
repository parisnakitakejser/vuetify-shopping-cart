<template>
    <v-parallax height="300" drak src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-container fluid grid-list-xl>
        
        <v-layout justify-center row wrap>
          <v-flex xs12 style="text-align: center;">
            <h1 class="display-3 font-weight-thin mb-3">Product search</h1>
            <h4 class="subheading">Find what your missing</h4>
          </v-flex>

          <v-flex xs12>
            <v-layout align-center justify-center row wrap>
              <v-flex xs6>
                <v-form>
                  <v-text-field outline label="Search for products" append-icon="search"></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

      </v-container>
    </v-parallax>
</template>

<script>
export default {
    data: () => ({
    })
}
</script>

<style>

</style>