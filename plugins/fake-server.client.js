import { nanoid } from 'nanoid/non-secure'
export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('getQuestion', getQuestion)
}
const getQuestion = id => {
    if (!!id) {

    } else {
        console.log('Geting first question')
        const [{id, question, answer}] = FAKE_DB
        return { id, question, answer: { type: answer.type, options: answer.options } }
    }
}

const FAKE_DB = [
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "hopefully có nghĩa là gì?"
        },
        answer: {
            type: "SELECT_ONE",
            options: [
                { value: "a", label: "if everything goes well" },
                { value:"b", label: "if the weather is bad" },
                { value:"c", label: "if you close your eyes" }
            ],
            correct: "a"
        }
    }
]