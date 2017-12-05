<template>
    <header>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact><a>Chat <span class="badge" v-if="messages>0">{{messages}}</span> </a></router-link>
            <router-link to="/carousel" tag="li" active-class="active" exact><a>Carousel</a></router-link>
            <router-link to="/settings" tag="li" active-class="active" exact><a>Settings</a></router-link>
        </ul>
    </header>
</template>
<script>
    export default {
        computed: {
            messages() {
                return this.$store.state.unreadMessages;
            }
        }
    }
</script>
<style scoped>
</style>