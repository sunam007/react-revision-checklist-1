import logo from "./logo.svg";
import "./App.css";

function App() {
  const headingStyle = {
    color: "lightcoral",
    textDecoration: "underline",
    textAlign: "center",
  };
  const editorials = [
    { heading: "Universal Pension", author: "Mir Ashraf Ali" },
    { heading: "Question over EVM Security", author: "A K M Motin" },
    { heading: "Foreign Trips", author: "P Bhattacharya" },
  ];
  return (
    <div className="App">
      <article className="blog">
        <h2 style={headingStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p style={{ textAlign: "start", fontSize: "16px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab
          aliquid repellendus ratione corrupti consequatur! Delectus voluptatem
          non eius, necessitatibus laborum veritatis accusantium mollitia. Error
          doloribus ab sint accusantium eligendi deserunt, ipsum ratione
          repellendus sunt quos dolor commodi. Officiis dolore repellat ipsa
          distinctio sed eos cumque obcaecati minima impedit voluptate!
        </p>
      </article>
      {editorials.map((editorial) => (
        <Blog heading={editorial.heading} author={editorial.author}></Blog>
      ))}
    </div>
  );
}

function Blog(props) {
  return (
    <div className="blog">
      <h3>"{props.heading}"</h3>
      <h4 style={{ color: "lightcoral" }}>Author: {props.author}</h4>
    </div>
  );
}

export default App;
