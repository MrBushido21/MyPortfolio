import { Route, Routes } from 'react-router';
import '../App.css';
import { Contacts } from '../Pages/contacts/Contacts';
import { HomePage } from '../Pages/home/HomePage';
import { Quiz } from '../projects/quiz/Quiz';
import { Projects } from '../Pages/projects/Projects';
import { Currency } from '../projects/currency/Currency';
import { Photos } from '../projects/Photos/Photos';
import { UsersApp } from '../projects/users/UsersApp';

type PropsType = {}
export const Main = ({ }: PropsType) => {
    return (
        <main className='bg-white dark:bg-zinc-900'>
            <Routes>
                <Route path='home' element={<HomePage/>} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='projects' element={<Projects />} />
                <Route path='projects/quiz' element={<Quiz />} />
                <Route path='projects/currency' element={<Currency />} />
                <Route path='projects/photos' element={<Photos />} />
                <Route path='projects/users' element={<UsersApp />} />
                <Route path='/' element={<HomePage />} />
            </Routes>           
        </main>
    );
}