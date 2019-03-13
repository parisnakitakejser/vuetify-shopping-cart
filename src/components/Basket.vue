<template>
  <v-container>
    <h2 class="display-2 mb-4">Basket</h2>

    <v-list two-line>
      <template v-for="(product, index) in products">
        <v-list-tile :key="product.product_id" avatar>
          <v-list-tile-avatar>
            <img :src="product.photo">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="product.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="product.sub_title"></v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile>
            {{product.price}}$
          </v-list-tile>

          <v-list-tile-action>
            <v-text-field label="Quantity" reverse :value="product.qty"></v-text-field>
          </v-list-tile-action>

          <v-list-tile>
            {{product.price * product.qty}}$
          </v-list-tile>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="red lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider v-if="index + 1 < products.length" :key="index"></v-divider>
      </template>
    </v-list>

    <v-container>
      <v-btn color="success" larger style="float: right;">Go to payment</v-btn>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      products: [{
        product_id: 'kitchen-1',
        photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        title: 'QW cooking utensils',
        sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
        price: 14.99,
        qty: 1
      },{
        product_id: 'kitchen-1',
        photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        title: 'QW cooking utensils',
        sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
        price: 44.99,
        qty: 2
      },{
        product_id: 'kitchen-1',
        photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        title: 'QW cooking utensils',
        sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
        price: 64.99,
        qty: 2
      }]
    })
  }
</script>

<style scoped>

</style>
