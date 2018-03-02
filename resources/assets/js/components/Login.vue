<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form v-model="valid" ref="form" lazy-validation>
                                    <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                                                  v-model="email"
                                                  :rules="emailRules" required></v-text-field>
                                    <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                                                  type="password" v-model="password"
                                                  :rules="passwordRules" required></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="submit">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            checkbox: false
        }),

        methods: {
            submit () {

                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    this.login();
                }
            },
            login() {
                axios.post('/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(response => {
                        if(response.status==200){
                            this.$root.$refs.toastr.s("Login successful!");
                            this.$router.push('/admin');
                        }

                    }).catch(error => {
                    this.$root.$refs.toastr.e(error.response.statusText);
                }).then(() => {
                    this.loading = false;
                });
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>