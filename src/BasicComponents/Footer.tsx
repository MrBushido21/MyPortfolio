import '../App.css';
import gitSVG from "../img/gitHub.svg"
import linkSVG from "../img/linkedIn.svg"
import telega from "../img/telegramm.png"

type PropsType = {}
export const Footer = ({ }: PropsType) => {
    return (
        <footer className="bg-zinc-950 py-10">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/MrBushido21" target='_blank'><img src={gitSVG} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/oleg-liskovsky/" target='_blank'><img src={linkSVG} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://t.me/FrontEndDev21" target='_blank'><img src={telega} alt="Link" /></a></li>
                    </ul>
                    <div className="text-slate-50 text-center mt-6">
                        <p>© 2023 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}