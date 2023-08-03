import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Anecdote from "./Anecdote";
import CreateNew from "./CreateNew";
import About from "./About";
import AnecdoteList from "./AnecdoteList";

const Menu = ({ anecdotes, addNew, setNotification }) => {
  const padding = {
    paddingRight: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          anecdotes
        </Link>
        <Link style={padding} to="/createnew">
          create new
        </Link>
        <Link style={padding} to="/about">
          about
        </Link>
      </div>

      <Routes>
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdotes={anecdotes} />}
        />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/createnew"
          element={
            <CreateNew addNew={addNew} setNotification={setNotification} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Router>
  );
};

export default Menu;
