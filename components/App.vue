<template lang="pug">
  div#container.col
    ProgressBar(:value="40") 4/10
    p(v-if="!ready") Loading
    div(v-else)
      p.paragraph {{ question.paragraph }}
      p.question {{ question.text }}
      SelectButton(
        v-model="selected" 
        :options="answer.options" 
        optionValue="value" 
        dataKey="value"
        aria-labelledby="basic") block template
        <template #option="slotProps">
          span {{slotProps.option.label}}
        </template>
    Button(@click="check" :disabled="!selected") Check
    Button(@click="skip") Skip
</template>

<script>

export default {
  data: () => ({
    ready: false,
    question: undefined,
    answer: undefined,
    selected: undefined
  }),
  async fetch() {
    const data = this.$getQuestion()
    console.log(data)
    this.question = data.question
    this.answer = data.answer
    this.ready = true
  },
  fetchOnServer: false,
  methods:{
    check(e){ console.log(this.selected) },
    skip: (e) => { console.log('skip') }
  }
}
</script>

<style></style>