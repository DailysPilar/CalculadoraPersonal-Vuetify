<script setup>
import CalculadoraView from './views/CalculadoraView.vue'
const tema=ref(true)
const theme=useTheme()
const cambiotema=()=>{
tema.value=!tema.value
theme.global.name.value=tema.value? "dark": "light"
}
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'
</script>

<template>  

 <v-app>
  <!--Calculadora-->
   <v-app-bar >
      <v-toolbar-title>
Calculadora Personal
      </v-toolbar-title>
      <v-btn icon @click="cambiotema">
        <v-icon icon="mdi-theme-light-dark" color="primary"></v-icon>
      </v-btn>  
       </v-app-bar>

     <v-main >
         <CalculadoraView></CalculadoraView>
    </v-main> 
   <!--  <v-app-bar > <HelloWord/></v-app-bar>


    <v-main >
      <v-expand-transition>
         <RouterView />
      </v-expand-transition>    
    </v-main> -->
   
  </v-app>

</template>
