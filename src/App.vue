<template>
    <div id="app">
        <b-img rounded alt="VitoshaTech Exam" class="mb-4" :src="compLogo" width="300"></b-img>
        <HelloWorld :msg="welcomeMsg"/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data: () => ({
        welcomeMsg: 'Welcome to your test, Lora!',
        compLogo: '/assets/vt_logo.png'
    })
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
