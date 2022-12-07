import React, { useReducer } from "react";
import styled from "styled-components";

interface State {
  count: number;
  lastAction: Action;
}

type Action = { type: "increment" } | { type: "decrement" };

const initialState: State = { count: 0, lastAction: { type: "increment" } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, lastAction: action };
    case "decrement":
      return { count: state.count - 1, lastAction: action };
    default:
      throw new Error();
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin: 8px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <div>Count: {state.count}</div>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      {state.count !== 0 && (
        <div>
          Action dispatched to useReducer is: {JSON.stringify(state.lastAction)}
        </div>
      )}
    </Container>
  );
}
