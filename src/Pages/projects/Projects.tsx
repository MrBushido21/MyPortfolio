import { Link } from 'react-router-dom'
import './projects.css'
import { Grid } from '@mui/material'
import { dataProjects } from '../../DataProjects'
import socialNetImg from '../../img/social-network.png'
import storeImg from '../../img/store-app.png'
import animeSite from '../../img/animeSite.png'
type PropsType = {}
export const Projects = ({ }: PropsType) => {

    let projects = dataProjects

    return (
        <div className='projects container'>
            <h2 className='text-center font-bold text-3xl mb-12'>React project</h2>
            <Grid className='grid-container' container >
                {projects.map(project =>
                    <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                        <Link className="projects__nav-link" to={project.to}>
                            <img className='projects__img' src={project.src} alt="" />
                        </Link>
                        <span>{project.title}</span>
                    </Grid>
                )}
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
                <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                    <a target='_blank' href='https://haki-anime-app.vercel.app' className="projects__nav-link">
                        <img className='projects__img' src={animeSite} alt="" />
                    </a>
                    <span>Anime site</span>
                </Grid>
            </Grid>
        </div>
    );
}