
<template>
  <FormSelect />
  <my-select />
</template>

<script>
import FormSelect from './components/FormSelect.vue'

export default {
  name: 'App',
  data() {
    return {
      selected: 'Москва',
      options: [
        { 'text': 'Москва', 'value': 'Москва' },
        { 'text': 'Санкт-Петербург', 'value': 'Санкт-Петербург' },
        { 'text': 'Нижний-Новгород', 'value': 'Нижний-Новгород' },
        { 'text': 'Казань', 'value': 'Казань' }
      ]
    }
  },
  components: {
    FormSelect
  }
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
