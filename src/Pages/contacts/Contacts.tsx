import "./contacts.css"
type PropsType = {}
export const Contacts = ({ }: PropsType) => {
    return (
        <div className="Contacts bg-slate-50 dark:bg-zinc-950 dark:text-slate-50">
            <div className="container ">
                <h1 className="text-6xl text-zinc-950 dark:text-slate-50">Contacts</h1>
                <h2>Location</h2>
                <div>Dnipro, Ukraine</div>
                <h2>Telegram</h2>
                <div>@FrontEndDev21</div>
                <h2>Email</h2>
                <div>olegliskom@gmail.com</div>
            </div>
        </div>
    );
}