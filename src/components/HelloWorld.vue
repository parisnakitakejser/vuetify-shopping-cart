<template>
  <v-container>
    <h2 class="display-2 mb-4">Hot products showing</h2>

    <v-layout row wrap>
      <template v-for="(product, index) in products">
        <v-flex xs2 pa-1 :key="index">
          <v-hover>
            <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="600" height="350">
              <v-img :src="product.src" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out orange draken-2 display-3 v-card--reveal display3 black--text" style="height: 100%;">
                    ${{product.price}}
                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-4" style="position: relative;">
                <v-btn absolute color="orange" class="white--text" fab medium right top>
                  <v-icon>shopping_cart</v-icon>
                </v-btn>

                <div class="font-weight-light grey--text title mb-2">{{product.category}}</div>
                <h3 class="display-1 font-weight-light orange--text mb-2">{{product.title}}</h3>

                <div class="font-weight-light mb-2">{{product.description}}</div>
              </v-card-text>
              
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      products: [{
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 24.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 34.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 44.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 54.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      },{
        price: 64.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'For the perfect meal',
        title: 'QW cooking utensils',
        description: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand'
      }]
    })
  }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%; 
}

.v-card h3.display-1 {
  font-size: 24px !important;
}
</style>
