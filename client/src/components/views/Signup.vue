<template>
    <v-form class="ma-3">
        <v-container>
            <v-layout column>
                <v-flex>
                    <h5 class="headline">Регистрация</h5>
                </v-flex>

                <v-flex>
                    <v-text-field label="Email"
                                  prepend-icon="person_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field label="Пароль"
                                  type="password"
                                  prepend-icon="lock_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-text-field label="Повторите пароль"
                                  type="password"
                                  prepend-icon="lock_outline">
                    </v-text-field>
                </v-flex>

                <v-flex>
                    <v-btn class="primary-gradient"
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
    export default {}
</script>

<style>
</style>