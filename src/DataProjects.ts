import quizImg from './img/quiz-img.png'
import usersImg from './img/users-img.png'
import currencyImg from './img/currency-img.png'
import photosImg from './img/photos-img.png'
import socialNetImg from './img/social-network.png'
import storeImg from './img/store-app.png'
import animeSite from './img/animeSite.png'
import todolist from './img/todolist.png'

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
export const dataProjectsLink: DataProjectsType[] = [
    {to: "https://mrbushido21.github.io/demo-social-app", src: socialNetImg, title: "Social Network App" },
    {to: "https://mrbushido21.github.io/store-app/", src: storeImg, title: "Stroe App"},
    {to: "https://haki-anime-app.vercel.app", src: animeSite, title: "Anime site"},
    {to: "https://todolist-nup8.vercel.app", src: todolist, title: "Todolist App"},
]
    