const sliderQuestions = [
    {
        questionId: "Q1",
        question: "Which department is this content primarily for?",
        options: [
            {
                text: 'Sales-Marketing ',
                value: 'Sales-Marketing ',
            },
            {
                text: 'Operations',
                value: 'Operations',

            },
            {
                text: 'Engineering',
                value: 'Engineering',
            },
            {
                text: 'Finance',
                value: 'Finance',
            }
        ]
    },
    {
        questionId: "Q2",
        question: "What is the dominant audience type?",
        options: [
            {
                text: 'GenX',
                value: 'GenX',
            },
            {
                text: 'GenY',
                value: 'GenY',
            },
            {
                text: 'GenZ',
                value: 'GenZ',
            }
        ]
    },
    {
        questionId: "Q3",
        question: "What kind of content do you want to train on?",
        options: [
            {
                text: 'Technical',
                value: 'Technical',
            },
            {
                text: 'Process',
                value: 'Process',
            },
            {
                text: 'Behavioral',
                value: 'Behavioral',
            }
        ]
    },
    {
        questionId: "Q4",
        question: "How large is the budget for this project?",
        options: [
            {
                text: 'Low',
                value: 'Low',
            },
            {
                text: 'Medium',
                value: 'Medium',
            },
            {
                text: 'High',
                value: 'High',
            }
        ]
    },
    {
        questionId: "Q5",
        question: "How many days of classroom training do you need converted?",
        options: [],
        type: "number"
    }
]
export default sliderQuestions;