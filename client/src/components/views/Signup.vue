<template>
    <v-form class="ma-3"
            ref="form"
            @submit.prevent="(valid && signup())">
        <v-container>
            <v-layout column>
                <v-flex>
                    <h5 class="headline">Регистрация</h5>
                </v-flex>

                <v-flex>
                    <v-text-field name="email"
                                  required
                                  label="E-mail"
                                  v-model="form.email"
                                  v-validate="'required|email'"
                                  :error-messages="errors.collect('email')"
                                  prepend-icon="mail_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field name="password"
                                  label="Пароль"
                                  v-model="form.password"
                                  v-validate="'required'"
                                  :error-messages="errors.collect('password')"
                                  ref="password"
                                  type="password"
                                  prepend-icon="lock_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field name="passconf"
                                  label="Повторите пароль"
                                  v-model="form.passconf"
                                  v-validate="'required|confirmed:password'"
                                  :error-messages="errors.collect('passconf')"
                                  type="password"
                                  prepend-icon="lock_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-btn class="primary-gradient"
                           type="submit"
                           color round block>
                        Регистрация
                    </v-btn>
                </v-flex>

                <v-flex class="body-1">
                    <a>Уже есть аккаунт? Войти</a>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
  export default {
    data: () => ({
      form: {
        email: null,
        password: null,
        passconf: null
      },
    }),
    methods: {
      signup() {
        console.log("send");
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