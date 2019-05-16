<template>
    <div>
        <v-toolbar class="primary-gradient" app>
            <v-toolbar-title>
                <router-link to="/">Заголовок</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn v-if="$store.getters.isLoggedIn" flat
                       @click="logout()">
                    Выйти
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <v-container class="pa-0" fluid>
                <v-layout row wrap align-center>
                    <v-flex>
                        <slot/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer app>
            <v-layout>
                <v-flex class="primary-gradient"
                        py-3
                        text-xs-center>
                    &copy; {{ new Date().getFullYear() }}
                </v-flex>
            </v-layout>
        </v-footer>
    </div>
</template>

<script>
  export default {
    data: () => ({
    }),
    methods: {
      logout() {
        this.$store.commit('logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style>
    /* your style */
</style>