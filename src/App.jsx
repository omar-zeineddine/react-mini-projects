import { useState } from "react";
import Alert from "./Alert";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for empty value
    if (!name) {
      // display alert
      showAlert(true, "danger", "enter item name");
    } else if (name && isEditing) {
      // handle Edit
    } else {
      // show alert
      showAlert(true, "success", "item added to list");
      // create new item with id and property and add to list
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    showAlert(true, "danger", "list emptied");
    setList([]);
  };

  // remove single item
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show ? (
          <Alert {...alert} removeAlert={showAlert} list={list} />
        ) : null}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            name=""
            id=""
            className="grocery"
            placeholder="example: eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 ? (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default App;
