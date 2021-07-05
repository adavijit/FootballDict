import FacePlaceholder from '../../../assets/faceplaceholder.jpg'
export default function Card(props) {

    const player = props.player;

    return (
        <section className="player-card">
        <div className="card">
          <header>
            <a className="profile">
              <img src={player.photo===""?FacePlaceholder :   player.photo } alt="Profile Image" />
            </a>
          </header>
          <article>
            <h1>{player.name}</h1>
            <h2>{player.country}</h2>
            <div className="info">
              <div>
                <span>{player.position}</span>
                <span>position</span>
              </div>
              <div>
                <span>{player.assists}</span>
                <span>Assists</span>
              </div>
              <div>
                <span>34</span>
                <span>Freekick</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    )
}
