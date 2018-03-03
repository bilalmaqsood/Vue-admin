<template>
    <v-app id="inspire" dark>
        <admin-nav :drawer="drawer"></admin-nav>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app fixed>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import NProgress from 'nprogress';
    import nav from './_nav.vue';

    export default {
        components: { 'admin-nav' : nav},
        data: () => ({
            drawer: true
        }),
        props: {
            source: String
        },
        mounted(){
            NProgress.start();
            setTimeout(function () {
                NProgress.done();
            },100);
        }
    }
</script>