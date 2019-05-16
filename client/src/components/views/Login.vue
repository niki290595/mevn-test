<template>
    <v-form class="ma-3"
            ref="form"
            @submit.prevent="(valid && login())">
        <v-container>
            <v-layout column>
                <v-flex>
                    <h5 class="headline">Авторизация</h5>
                </v-flex>

                <v-flex v-if="errorMessage">
                    <span class="subheading error--text">{{ errorMessage }}</span>
                </v-flex>

                <v-flex>
                    <v-text-field name="email"
                                  required
                                  label="E-mail"
                                  v-model="user.email"
                                  v-validate="'required|email'"
                                  :error-messages="errors.collect('email')"
                                  prepend-icon="mail_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field name="password"
                                  label="Пароль"
                                  v-model="user.password"
                                  v-validate="'required|min:6'"
                                  :error-messages="errors.collect('password')"
                                  ref="password"
                                  type="password"
                                  prepend-icon="lock_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-btn class="primary-gradient"
                           type="submit"
                           :loading="loading"
                           :disabled="loading"
                           round block>
                        Войти
                    </v-btn>
                </v-flex>

                <v-flex class="body-1">
                    <router-link to="/signup">Регистрация</router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
  import {RepositoryFactory} from "../../repositories/RepositoryFactory";

  const AuthRepository = RepositoryFactory.get('auth');

  export default {
    data: () => ({
      user: {
        email: null,
        password: null
      },
      errorMessage: null,
      loading: false
    }),
    methods: {
      login() {
        this.loading = true;
        this.errorMessage = null;
        AuthRepository.login(this.user)
          .then(
            (response) => {
              this.$store.commit('login', response.data.token);
              this.$router.push('/dashboard')
            },
            (error) => { this.showError(error.response.data.message) }
          );
      },

      showError(msg) {
        if (msg.startsWith('User')) {
          this.errorMessage = 'Неверный логин или пароль'
        } else
          this.errorMessage = msg;
        this.loading = false;
      }
    },
    computed: {
      valid() {
        return Object.keys(this.fields).every(field => {
          return this.fields[field] && this.fields[field].valid;
        });
      }
    }
  }
</script>

<style>
</style>