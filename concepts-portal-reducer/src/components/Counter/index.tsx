import { useReducer } from 'react';

interface IState {
  count: number;
}

type TAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const reducer = (state: IState, action: TAction) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const Counter = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-[100%] h-[100%] flex flex-col border-r-2 border-r-gray-500">
        <button className="bg-green-600 text-white" onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button className="bg-red-600 text-white" onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
      <div className="flex flex-grow text-7xl items-center justify-center bg-gray-400 text-gray-800">{state.count}</div>
    </div>
  )
}