function App() {
  const [counters, setCounters] = React.useState([]);

  const addCounter = () => {
    const newX = [...counters, { id: counters.length + 1, number: 0 }];
    setCounters(newX);
  };

  const updateCounter = (id, n) => {
    console.log(id);
    let idx = counters.findIndex((el) => el.id === id);
    const newCounter = [...counters];
    if (newCounter[idx].number + n < 0) {
      return;
    }
    newCounter[idx].number += n;
    // console.log(newCounter);
    setCounters(newCounter);
  };

  const del = (id) => {
    let idx = counters.findIndex((el) => el.id === id);
    const newCounter = [...counters];
    newCounter.splice(idx, 1);
    setCounters(newCounter);
    // setCounters((prev) => prev.filter((el) => el.id !== id));
  };

  let sum = counters.reduce((acc, curr) => {
    return acc + curr.number;
  }, 0);

  return (
    <div className="app">
      <h1 class="show-sum">Sum = {sum} </h1>
      <button onClick={addCounter} class="btn-add">
        Add Counter
      </button>
      <hr />
      {counters.map((el) => (
        <Counter
          key={el.id}
          item={el}
          updateCounter={updateCounter}
          del={del}
        />
      ))}
    </div>
  );
}

function Counter(props) {
  const { item, updateCounter, del } = props;
  return (
    <div className="counter">
      <button onClick={() => updateCounter(item.id, -1)} class="btn btn-dec">
        -
      </button>
      <h3 class="number">{item.number}</h3>
      <button onClick={() => updateCounter(item.id, 1)} class="btn btn-inc">
        +
      </button>
      <button
        onClick={() => updateCounter(item.id, -item.number)}
        class="btn btn-clr"
      >
        C
      </button>
      <button onClick={() => del(item.id)} class="btn btn-dlt">
        X
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root")).render(
  <App />
);
