import quizImg from './img/quiz-img.png'
import usersImg from './img/users-img.png'
import currencyImg from './img/currency-img.png'
import photosImg from './img/photos-img.png'

type DataProjectsType = {
    to: string
    src: any
    title: string
}

export const dataProjects: DataProjectsType[] = [
    {to: "quiz", src: quizImg, title: "Quiz App" },
    {to: "users", src: usersImg, title: "Users App"},
    {to: "currency", src: currencyImg, title: "Currency App"},
    {to: "photos", src: photosImg, title: "Photos App"},
]
    