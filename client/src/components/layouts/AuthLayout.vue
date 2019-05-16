<template>
    <v-content>
        <v-container fill-height fluid class="background">
            <v-layout row wrap align-center>
                <v-flex class="form">
                    <slot/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
  export default {
    name: 'auth-layout'
  }
</script>

<style>
    .form {
        width: 100%;
        max-width: 420px;
        min-width: 300px;
        margin: auto;
        background: rgba(255, 255, 255, .8);
        border-radius: 6px;
    }
    .background {
        background: url('/assets/img/background.jpg') no-repeat center;
        background-size: cover;
    }
</style>