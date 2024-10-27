import '../css/agenda.css';
import useFetch from '../hooks/useFetch';

export default function Agenda() {
    const {loading, data, errors} = useFetch("agenda");

    function toDate(date) {
        const [dd, mm, yyyy] = date.split("/");
        const formated = mm + "/" + dd + "/" + yyyy;
        return new Date(formated);
    }

    return <section id="agenda">
        <h2 className="rh2">Agenda</h2>
        <div className="hr"></div>
        <div className='events'>
            { data && !loading ?
            data.sort((a, b) => toDate(a.date_format) < toDate(b.date_format)).map((e, i) => 
                <div className="event" key={i}>
                    <span className="event-title">{e.titre}</span>
                    <div className='event-infos'>
                        <span className="event-date">{e.date}</span> 
                        { e.lieu ? <> • <span className="event-lieu">{e.lieu}</span></> : <></>}
                    </div>
                    <p className="event-description">{e.description}</p>
                </div>
            )
            :
                <div className="spinner-border m-5 align-self-center" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            }
        </div>
    </section>
}
