import React from "react";
import "./styles.css";
import sponsors from "./Sponsors";

const Styles = {
  container: {
    maxWidth: 900,
    margin: "auto",
    display: "flex"
  }
};

const Header = () => {
  return (
    <section
      style={{
        background:
          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60') no-repeat center center fixed",
        maxWidth: "100%",
        backgroundSize: "cover",
        height: 600
      }}
    >
      <div
        className="header-container"
        style={{
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          ...Styles.container
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "right",
            fontSize: "4.5rem",
            marginRight: 24
          }}
        >
          React JS <br /> Green Bay
        </h1>
      </div>
    </section>
  );
};

const Sponsors = ({ sponsors }) => {
  return (
    <div
      className="sponsor-image-container container"
      style={{
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 24,
        ...Styles.container
      }}
    >
      {sponsors.map(sponsor => (
        <img
          key={sponsor.id}
          style={{
            borderRadius: "50%",
            padding: 16,
            height: 64,
            width: 64
          }}
          src={sponsor.src}
          alt={sponsor.alt}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <h2>Come Learn With Us!</h2>
      <hr />
      <section
        style={{
          justifyContent: "center",
          padding: 24,
          ...Styles.container
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          sagittis purus at nisl feugiat aliquet. Fusce interdum mauris felis,
          at scelerisque ante efficitur at. Nam elit magna, aliquet in faucibus
          eget, laoreet sed lectus. Nam placerat, turpis eget dictum finibus,
          lectus felis tincidunt nisl, vel mattis libero ex eget erat. In eget
          tortor tellus. Donec gravida eget nibh non sollicitudin. Mauris purus
          turpis, lobortis id tincidunt non, iaculis sit amet enim. Maecenas
          fermentum, ligula id semper euismod, magna metus ultrices massa, in
          scelerisque odio mauris in risus. Nulla facilisis maximus mi convallis
          blandit. Sed diam turpis, dapibus suscipit massa eu, faucibus gravida
          nulla. In hac habitasse platea dictumst. Fusce quis est non massa
          facilisis condimentum. Etiam porta diam nec urna imperdiet tempus.
          Proin a arcu ullamcorper, iaculis massa ut, vulputate risus. Vivamus
          vitae placerat diam. Vestibulum semper molestie ex eget condimentum.
        </p>
      </section>
      <h2>Sponsors</h2>
      <hr />
      <Sponsors sponsors={sponsors} />
    </div>
  );
}
