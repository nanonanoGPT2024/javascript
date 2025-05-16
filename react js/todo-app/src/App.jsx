import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
  };
  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodos = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const [filter, setFilter] = useState("all");
  const filteredTodos = todos.filter((todos) => {
    if (filter === "active") return !todos.done;
    if (filter === "done") return todos.done;
    return true;
  });

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: darkMode ? "#121212" : "#f0f0f0",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)}>
        {" "}
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setFilter("all")}>Semua</button>
        <button onClick={() => setFilter("active")}>Belum Selesai</button>
        <button onClick={() => setFilter("done")}>Selesai</button>
      </div>
      <h1>Todo List 📝</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Apa yang anda ingin kamu lakukan"
        style={{ marginRight: "20px" }}
      />
      <button onClick={addTodo}>Tambah</button>

      <ul>
        {filteredTodos.map((todo, i) => (
          <li
            key={i}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              marginTop: "10px",
            }}
          >
            <span onClick={() => toggleDone(i)} style={{ cursor: "pointer" }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodos(i)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
