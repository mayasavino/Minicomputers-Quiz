const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            incorrectAnswer: 0,
            count: 3,
            questions: [
                {
                    question: "Who designed the first minicomputer?",
                    answers:{a: 'Alan Turing', b: 'Bill Gates', c: 'Seymour Cray', d: 'Grace Hopper'},
                    correctAnswer: 'c'
                },
                {
                    question: "What was one technology that was instrumental in the creation of the minicomputer?",
                    answers:{a: 'Transistors', b: 'Minicomputing', c: 'Multi-chip processors', d: 'Multi-core processors'},
                    correctAnswer: 'a'
                },
                {
                    question: "What is the contemporary term for a minicomputer?",
                    answers:{a: 'Smartphone', b: 'Microcomputer', c: 'Drum machine', d: 'Midrange computer'},
                    correctAnswer: 'd'
                },


            ]
        }
    },
    methods:{
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.incorrectAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.incorrectAnswer = 0
        }
    }
})

app.mount('#app')