import React, { useCallback, useEffect, useState } from 'react';

const SimpleHabit = (props) => {
    // state = {
    //     count: 0,
    //   };
    const [count, setCount] = useState(0);
    // 함수형에서는 useState()를 통해, 실제의 state 값과, state 값을 업데이트할 수 있는 함수(setCount)를 받아올 수 있다. 

    useEffect(() => {
        console.log(`mounted & updated! : ${count}`);
    }, [count]);
    // 두번째 인자로 count를 넣어주면, count가 변경될 때마다 호출하여준다. 
    // []을 두번째 인자로 전달하면, 처음에만 호출된다. 
    

    const handleIncrement = useCallback(() => {
        // this.setState({ count: this.state.count + 1 });
        setCount(count + 1);
      });


    return (
        <li className="habit">
          <span className="habit-name">Reading</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
};

export default SimpleHabit;