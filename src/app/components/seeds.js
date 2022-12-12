const sliderQuestions = [
    {
        questionId: "Q1",
        question: "Which department is this content primarily for?",
        options: [
            {
                text: 'Sales-Marketing ',
            },
            {
                text: 'Operations',
            },
            {
                text: 'Engineering',
            },
            {
                text: 'Finance',
            }
        ]
    },
    {
        questionId: "Q2",
        question: "What is the dominant audience type?",
        options: [
            {
                text: 'GenX',
            },
            {
                text: 'GenY',
            },
            {
                text: 'GenZ',
            }
        ]
    },
    {
        questionId: "Q3",
        question: "What kind of content do you want to train on?",
        options: [
            {
                text: 'Technical',
            },
            {
                text: 'Process',
            },
            {
                text: 'Behavioral',
            }
        ]
    },
    {
        questionId: "Q4",
        question: "How large is the budget for this project?",
        options: [
            {
                text: 'Low',
            },
            {
                text: 'Medium',
            },
            {
                text: 'High',
            }
        ]
    },
    {
        questionId: "Q5",
        question: "How many days of classroom training do you need converted?",
        options: [
            // {
            //     text: '5',
            // },
            // {
            //     text: '4',
            // },
            // {
            //     text: '3',
            // },
        ],
        type: "number"
    }
]
export default sliderQuestions;