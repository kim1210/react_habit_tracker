import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // (방법1) <Habit/>이 PureComponent일 경우, 이 방법은 새로운 배열을 만들어서 배열 자체의 refernce는 새로 생성되었지만, 안에 있는 각 객체들의 참조값은 변화가 없기 때문에 render() 호출 안된다. 
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++; 

    // (방법2) {...habit} 이건 새로운 오브젝트를 생성하는 방법이라서, 각 개체의 참조값도 변화시키기 때문에 render() 호출된다. wow! 
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((h) => h.id !== habit.id);
    this.setState({ habits });
  };

  hanldeAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0 ) {
        return {...habit, count :0};
      } return habit;
    })
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.hanldeAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;

// function App() {
//   return <Habits />;
// }

// export default App;
