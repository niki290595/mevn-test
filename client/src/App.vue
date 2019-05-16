<template>
    <div id="app">
        <v-app>
            <component :is="layout">
                <router-view/>
            </component>
        </v-app>
    </div>
</template>

<script>
  export default {
    computed: {
      layout() {
        return this.$route.meta.layout || 'default-layout'
      }
    }
  }
</script>

<style>
    #app {min-height: 100vh;}
</style>