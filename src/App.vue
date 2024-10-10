<script setup>
import CalculadoraView from './views/CalculadoraView.vue'
const tema=ref(true)
const theme=useTheme()
const cambiotema=()=>{
tema.value=!tema.value
theme.global.name.value=tema.value? "dark": "light"
}
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'
</script>

<template> 
 <v-app>
   <v-app-bar >
      <v-toolbar-title>Calculadora Personal</v-toolbar-title>
      <v-btn icon @click="cambiotema">
        <v-icon icon="mdi-theme-light-dark" color="primary"></v-icon>
      </v-btn>  
       </v-app-bar>
     <v-main :style="{ background: '#E1BEE7' }">
         <CalculadoraView></CalculadoraView>
    </v-main> 
  </v-app>

</template>
