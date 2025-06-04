import React from 'react';

type GreetingProps = {
  name: string;
  age?: number;
};

const Greeting = ({ name, age }: GreetingProps) => (
  <div>
    <h2>Hello, {name}!</h2>
    <p>{age ? `You are ${age} years old.` : 'Age is just a number!'}</p>
  </div>
);

export default Greeting;

