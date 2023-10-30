import { Link } from 'react-router-dom'
import './projects.css'
import { Grid } from '@mui/material'
import { dataProjects, dataProjectsLink } from '../../DataProjects'
import socialNetImg from '../../img/social-network.png'
import storeImg from '../../img/store-app.png'
import animeSite from '../../img/animeSite.png'
type PropsType = {}
export const Projects = ({ }: PropsType) => {

    let projects = dataProjects;
    let projectsLink = dataProjectsLink;

    return (
        <div className='projects container'>
            <h2 className='text-center font-bold text-3xl mb-12'>React project</h2>
            <Grid className='grid-container' container >
                 {projectsLink.map(project =>
                    <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                        <a className="projects__nav-link" target='_blank' href={project.to}>
                            <img className='projects__img' src={project.src} alt="" />
                        </a>
                        <span>{project.title}</span>
                    </Grid>
                )}
                {projects.map(project =>
                    <Grid className='projects__card dark: bg-slate-50' item xs={12} sm={5} md={4} lg={3}>
                        <Link className="projects__nav-link" to={project.to}>
                            <img className='projects__img' src={project.src} alt="" />
                        </Link>
                        <span>{project.title}</span>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}