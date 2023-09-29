import { Link } from 'react-router-dom'
import './projects.css'
import quizImg from '../../img/quiz-img.png'
import usersImg from '../../img/users-img.png'
import currencyImg from '../../img/currency-img.png'
import photosImg from '../../img/photos-img.png'
import socialNetImg from '../../img/social-network.png'
import storeImg from '../../img/store-app.png'
import { Grid } from '@mui/material'
type PropsType = {}
export const Projects = ({ }: PropsType) => {
    return (
        <div className='projects container'>
            <Grid className='grid-container' container spacing={1}>
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <Link className="projects__nav-link" to="quiz">
                        <img className='projects__img' src={quizImg} alt="" />
                    </Link>
                    <span>Quiz App</span>
                </Grid>
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <Link className="projects__nav-link" to="users">
                        <img className='projects__img' src={usersImg} alt="" />
                    </Link>
                    <span>Add invite App</span>
                </Grid>
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <Link className="projects__nav-link" to="currency">
                        <img className='projects__img' src={currencyImg} alt="" />
                    </Link>
                    <span>Currency App</span>
                </Grid>
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <Link className="projects__nav-link" to="photos">
                        <img className='projects__img' src={photosImg} alt="" />
                    </Link>
                    <span>Photos colection App</span>
                </Grid>
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <a target='_blank' href='https://mrbushido21.github.io/demo-social-app' className="projects__nav-link">
                        <img className='projects__img' src={socialNetImg} alt="" />
                    </a>
                    <span>Social Network App</span>
                </Grid>
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <a target='_blank' href='https://mrbushido21.github.io/store-app/' className="projects__nav-link">
                        <img className='projects__img' src={storeImg} alt="" />
                    </a>
                    <span>Stroe App</span>
                </Grid>
            </Grid>
        </div>
    );
}