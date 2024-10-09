<template>
 <v-container fill-height class="d-flex align-center justify-center">
      <v-row align="center" justify="center" rows="3">
        <v-col cols="12" sm="8" md="4">
          <v-card class="pa-4">
            
            <v-card-text>
              <v-text-field v-model="display" type="text"></v-text-field>
             <v-row>
                <v-col cols="6">
                  <v-btn block @click="borrartodo" color="red">AC</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block @click="borrarultimo" color="red">C</v-btn>
                </v-col>
              </v-row> 
              <v-row>
                <v-col v-for="button in buttons" :key="button" cols="3">
                  <v-btn @click="input(button)">{{ button }}</v-btn>
                </v-col>
               
              </v-row> 
                           </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue";


  const display=ref("")
   const buttons=ref(['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'])
    const input=(button)=>{
      if (button=== "=") {
      display.value = eval(display.value);
      } else {
        display.value += button;
      }
    }
      const borrartodo=()=>{
      display.value=""
    }
  const borrarultimo=()=>{
      display.value=display.value.slice(0,-1)
    }

</script>

<style>

</style>