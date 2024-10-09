<template lang="pug" class="my-app-dark">
  div#container.col
    //- <Button label="Toggle Dark Mode" @click="toggleDarkMode" />
    ProgressBar(:value="(questionCount - lesson.length) * 10") {{questionCount - lesson.length}}/{{questionCount}}
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
    Button(@click="skip" :disabled="lesson.length == 0") Next
    Message(v-if="correct===true" severity="success" icon="pi pi-check") Correct
    Message(v-if="correct===false" severity="error" icon="pi pi-times-circle") Incorrect
</template>

<script>
export default {
  data: () => ({
    ready: false,
    lesson: [],
    id: undefined,
    questionCount: 0,
    question: undefined,
    answer: undefined,
    selected: undefined,
    correct: undefined
  }),
  async fetch() {
    this.lesson = this.$getLesson()
    this.questionCount = this.lesson.length
    const data = this.$getQuestion(this.lesson.shift())
    console.log(data)
    this.id = data.id
    this.question = data.question
    this.answer = data.answer
    this.ready = true
  },
  fetchOnServer: false,
  methods: {
    check() {
      console.log(this.selected)
      this.correct = this.$answer(this.id, this.selected)
    },
    skip() {
      console.log('skip')
      const {id, question, answer} = this.$getQuestion(this.lesson.shift())
      this.id = id
      this.question = question
      this.answer = answer
      this.selected = undefined
      this.correct = undefined
    },
  }
}
</script>

<style></style>