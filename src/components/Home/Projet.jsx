import montblanc from "../../assets/montblanc.jpg";

export default function Projet() {
    return (<section id="projet">
        <div className="projet-left">
            <img src={montblanc} alt="Mont Blanc" />
        </div>
        <div className="projet-right">
            <h2 className="rh2">Le projet</h2>
            <div className="hr"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta libero blanditiis veniam soluta accusamus recusandae deleniti reprehenderit delectus. Ipsam dolor explicabo sint vero quas cumque reprehenderit magnam saepe quo.
            </p>
        </div>
    </section>
    );
}
