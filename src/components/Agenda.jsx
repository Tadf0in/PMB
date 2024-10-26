import '../css/agenda.css';

export default function Agenda() {
    return <section id="agenda">
        <h2 className="rh2">Agenda</h2>
        <div className="hr"></div>
        <div className='events'>
            <div className="event">
                <span className="event-title">Concours de logo</span>
                <span className="event-date">Juqu'au 10 novembre</span>
                <p className="event-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias iure nobis ea aut officia vero rem tempora? Laudantium sapiente aspernatur laborum atque, aut harum dolores corrupti! Inventore, omnis excepturi!</p>
            </div>
            <div className="event">
                <span className="event-title">Randonnée de passation</span>
                <span className="event-date">Dimanche 20 octobre</span>
                <p className="event-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quisquam dolor debitis, nisi numquam repudiandae odit voluptatem possimus nihil aliquam deleniti doloremque consequuntur ullam dolorem expedita libero molestias eum. Labore?</p>
            </div>
        </div>

    </section>
}
