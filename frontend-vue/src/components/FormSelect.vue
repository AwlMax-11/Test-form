<template>
  <div id="my-select" class="demo">
  <select v-model="sity">
    <option v-for="option in optionSity" :key="option.text" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <select v-model="guild">
    <option v-for="option in optionGuild" :key="option.text" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <select v-model="employee">
    <option v-for="option in optionEmployee" :key="option.text" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <select v-model="brigade">
    <option v-for="option in optionBrigade" :key="option.text" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <select v-model="change">
    <option v-for="option in optionChange" :key="option.text" :value="option.value">
      {{ option.text }}
    </option>
  </select>
 <!-- <span>Выбрано: {{ sity }}</span> -->
</div>
</template>

<script>
export default {
  name: 'my-select',
  data() {
    return {
      sity: 'Выберите город',
      optionSity: [
        { text: 'Выберите город', value: '0' },
        { text: 'Москва', value: '1' },
        { text: 'Санкт-Петербург', value: '2' },
        { text: 'Костомукша', value: '3' },
        { text: 'Рига', value: '4' },
        { text: 'Череповец', value: '5' }

      ],
      guild: 'Выберите цех',
      optionGuild: [
        { text: 'Выберите цех', value: '00' },
        { text: 'Северсталь-Инфоком',  value: '11' },
        {  text: 'Ижорский трубный завод', value: '22' },
        {  text: 'Карельский окатыш', value: '33' },
        {  text: 'Severstal Distribution SIA', value: '44' },
        {  text: 'ЧМК', value: '55' },        
        {  text: 'Северсталь-Метиз', value: '55' },
        {  text: 'ПАО Северсталь', value:'11' }

      ],
      employee: 'Выберите сотрудника',
      optionEmployee: [
        { text: 'Выберете сотрудника', value: '000' },
        { text: 'Ябчаник Владимир Богданович', value: '111' },
        { text: 'Ребенок Александра Вячеславовна', value: '111' },
        { text: 'Паламарчук Дмитрий Вадимович', value: '222' },
        { text: 'Шиманская Марина Мечиславовна', value: '222' },
        { text: 'Вершинин Даниил Алексеевич', value: '222' },
        { text: 'Полтева Марьяна Михайловна',  value: '333' },
        { text: 'Скороходова Татьяна Александровна', value: '333' },
        { text: 'Панфилов Никита Владиславович', value: '444' },
        { text: 'Байда Мария Карповна', value: '444' },
        { text: 'Балугов Исмаил Абдулхаликович', value: '555' },
        { text: 'Базилевич Оксана Олеговна', value: '555' },
        { text: 'Васильев Виктор Андреевич', value: '555' },
        { text: 'Голяков Яков Абрамович', value: '555' },
        { text: 'Дьячков Леонид Николаевич', value: '111' }
      ],
      brigade: 'Первая бригада',
      optionBrigade: [
        { text: 'Первая бригада', value: '1' },
        { text: 'Вторая бригада', value: '2' }
      ],
      change: 'Первая смена',
      optionChange: [
        { text: 'Первая смена', value: '1' },
        { text: 'Вторая смена', value: '2' }
      ]
    }
  }
}
</script>