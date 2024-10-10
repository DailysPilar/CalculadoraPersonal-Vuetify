<template>
 <v-container fill-height class="d-flex align-center justify-center" >
      <v-row align="center" justify="center" rows="3" >
        <v-col cols="12" sm="8" md="4" >
          <v-card class="pa-4 "  style="box-shadow:0 4px 8px 0 blueviolet, 0 6px 20px 0 rgba(209, 96, 246, 0.19);border-radius:20px;">
            <v-card-text>
              
             <v-text-field v-model="display"  hide-details="true" variant="solo-filled"  style="box-shadow:0 4px 8px 0 rgba(70, 2, 107, 0.2), 0 6px 20px 0 rgba(209, 96, 246, 0.19); ">
             </v-text-field>
           
             <div style="text-align: right; margin-right: 25px;  margin-top: 5px;height: 30px;">
  <v-text v-if="subdisplay" style="color: darkgrey; font-size: 20px;">
    {{ subdisplay }}
  </v-text>
</div>

             <br>
             <v-row>
                <v-col cols="6">
                  <v-btn block @click="borrartodo" class="rounded-pill mx-auto" elevation="4" style="color:red; height: 50px; font-size: 25px;">AC</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block @click="borrarultimo" class="rounded-pill mx-auto" elevation="4" style="color:red; height: 50px; font-size: 25px;">C</v-btn>
                </v-col>
              </v-row> 
              <v-row>
                <v-col v-for="button in buttons" :key="button" cols="3" rounded>
                  <v-btn v-if="button==='='" class=" rounded-circle mx-auto" elevation="4" style="background:rgb(201, 53, 4);height: 60px; font-size: 25px;" @click="input(button)">{{ button }}</v-btn>
                  <v-btn v-else-if="operadores.includes(button)" class=" rounded-circle mx-auto" elevation="4" style="color:rgb(201, 53, 4);height: 60px; font-size: 30px;" @click="input(button)">{{ button }}</v-btn>
                  <v-btn v-else class=" rounded-circle mx-auto" elevation="4" style="color:blueviolet;height: 60px; font-size: 25px;" @click="input(button)">{{ button }}</v-btn>
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
    const subdisplay=ref("")

  const buttons=ref(['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'])
  const operadores=ref(['/', '*',  '-', '.', '+'])

  const input=(button)=>{
      if (button=== "=") {
      subdisplay.value=""
     try {
      display.value = eval(display.value).toString()
    } catch (e) {
      display.value = "Error"
    }
      } else {
        if(operadores.value.includes(button) && operadores.value.includes(display.value.slice(-1))){
          display.value=display.value.slice(0,-1)+button
          subdisplay.value=""
        }else{
        display.value += button
         if(operadores.value.includes(button)){
          subdisplay.value=""
        }else{        
        subdisplay.value = eval(display.value).toString()
        }
        }
      }
    }
  const borrartodo=()=>{
      display.value=""
    }
  const borrarultimo=()=>{
      display.value=display.value.slice(0,-1)
    }

</script>

<style scoped>

</style>