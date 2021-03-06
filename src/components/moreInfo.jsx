import React from "react";
import { Link } from "react-router-dom";

class moreInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const { value } = event.target;
      window.location.replace(`/champions/${value}`);
    }
  };
  render() {
    let { id, lore, spells, stats } = this.props.location.state.data;
    let skinUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
    spells = spells.map((spell) => {
      return (
        <li key={spell.id}>
          <h3> {spell.name} </h3>{" "}
          <p style={{ lineHeight: 1.6 }}> {spell.description} </p>
        </li>
      );
    });
    return (
      <>
        <div id="search">
          <h1>
            <input
              onKeyPress={this.handleKeyPress}
              placeholder="Search..."
            ></input>
          </h1>
        </div>
        <div className="containerInfo">
          <main>
            <h1> {id} </h1>
            <img src={skinUrl} />
            <h2> Lore </h2>
            <p style={{ lineHeight: 1.8, fontSize: "1.2em", padding: 20 }}>
              <span
                id="letterLore"
                style={{ fontFamily: "system font", marginLeft: 0 }}
              >
                {lore[0]}
              </span>
              {lore.slice(1)}
            </p>
          </main>
          <ul className="spells">
            <h2> Spells </h2>
            {spells}
            <button className="footer">
              <Link to={`/champions/${id}`} style={{ marginTop: 20 }}>
                Back
              </Link>
            </button>
          </ul>
          <div className="statGrid2">
            <ul>
              <h2> Stats </h2>
              <li>
                <h4> HP: </h4>
                <div
                  className="bar"
                  style={{
                    width: stats.hp,
                    height: 20,
                    backgroundColor: "red",
                    padding: 5,
                  }}
                >
                  {stats.hp}
                </div>
              </li>
              <li>
                <h4> Magic Damage: </h4>
                <div
                  className="bar"
                  style={{
                    width: stats.mp,
                    height: 20,
                    backgroundColor: "orange",
                  }}
                >
                  {stats.mp}
                </div>
              </li>
              <li>
                <h4> Magic Resist: </h4>
                <div
                  className="bar"
                  style={{
                    width: stats.spellblock,
                    height: 20,
                    backgroundColor: "yellow",
                  }}
                >
                  {stats.spellblock}
                </div>
              </li>
              <li>
                <h4> Armor: </h4>
                <div
                  className="bar"
                  style={{
                    width: stats.armor,
                    height: 20,
                    backgroundColor: "lightgreen",
                  }}
                >
                  {stats.armor}
                </div>
              </li>
              <li>
                <h4> Attack Damage: </h4>
                <div
                  className="bar"
                  style={{
                    width: stats.attackdamage,
                    height: 20,
                    backgroundColor: "lightblue",
                  }}
                >
                  {stats.attackdamage}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default moreInfo;
