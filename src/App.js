import "./App.css";

function App() {
  function getName(user) {
    if (user) return user.firstName + " " + user.lastName;

    return "Stranger!";
  }

  const user = {
    firstName: "Atinderbir",
    lastName: "Singh",
  };

  const link = <a style={{ textDecoration: "none" }} href="/doesntExistLink">Testing</a>;

  return (
    <>
      <div>{`Hello, ${getName(user)}`}</div>
      <div className="link">
        {link}
      </div>
    </>
  );
}

export default App;
