
type PropsType = {}
export const HomePage = ({ }: PropsType) => {
    return (
        <>
            <section className='about bg-zinc-950'>
                <div className='container'>
                    <div className='about__bg text-slate-50 text-center'>
                        <h1 className='font-bold text-5xl'>Hi, my name is Oleg</h1>
                        <h2 className='font-bold text-3xl mt-3 mb-6'>I`m frontend developer</h2>
                    </div>
                    <p className="text-slate-50 text-center text-xl mb-6">I've been doing front-end development for over 1 year, and during this time I've made more than 10 projects, 6 of which were using react, and the rest were html coding. About me, I'm responsible, sociable and not conflicted. I don't like to praise myself, so it's better to look at my projects and evaluate them yourself, thank you for your attention</p>
                </div>
            </section>
            <section className='skills mt-24 bg-slate-50 py-14 dark:bg-zinc-950'>
                <div className="container">
                    <h2 className='font-bold text-4xl dark:text-slate-50 text-center'>Technology stack</h2>
                    <div className='skills-card-box flex justify-center mt-10 text-slate-50'>
                        <div className='skills-card'>
                            <ul className='skills-ul text-center'>
                                <li className='title-li'>HTML coding:</li>
                                <li className='li'>HTML 5</li>
                                <li className='li'>CSS</li>
                                <li className='li'>SCSS</li>
                                <li className='li'>JS</li>
                                <li className='li'>BEM</li>
                                <li className='li'>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className='skills-card'>
                            <ul className='skills-ul text-center'>
                                <li className='title-li'>Frontend Dev:</li>
                                <li className='li'>React</li>
                                <li className='li'>Redux</li>
                                <li className='li'>TypeScripts</li>
                                <li className='li'>Axios</li>
                                <li className='li'>React router</li>
                                <li className='li'>Rest API</li>
                                <li className='li'>Material UI</li>
                                <li className='li'>Next.js</li>
                            </ul>
                        </div>
                        <div className='skills-card'>
                            <ul className='skills-ul text-center'>
                                <li className='title-li'>Other aids:</li>
                                <li className='li'>Figma</li>
                                <li className='li'>Gulp</li>
                                <li className='li'>Chat GPT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}