import { nanoid } from 'nanoid/non-secure'
export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('getQuestion', getQuestion)
    inject('getLesson', getLesson)
    inject('answer', answer)
}
const getQuestion = id => {
    if (!id) {
        console.error('invalid id', id)
        return null        
    }
    return FAKE_DB.find(q => q.id == id)
    // if (!!id) {
    // } else {
    //     console.log('Geting first question')
    //     const [{id, question, answer}] = FAKE_DB
    //     return { id, question, answer: { type: answer.type, options: answer.options } }
    // }
}
const getLesson = () => FAKE_DB.map(q => q.id)
const answer = (id, ans) => getQuestion(id).answer.correct == ans

const FAKE_DB = [
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "1. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "2. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "3. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "4. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "5. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "6. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "7. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "8. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "9. hopefully có nghĩa là gì?"
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
    },
    {
        id: nanoid(),
        question: {
            type: "READ_AND_LISTEN",
            paragraph: "\"Hopefully\" means you hope that something good will happen.",
            sound: "sound/url",
            text: "10. hopefully có nghĩa là gì?"
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
    },
]