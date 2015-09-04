const increment = function () {
  return {
    type: 'INCREMENT',
  };
};

const decrement = function () {
  return {
    type: 'DECREMENT',
  };
};

export default {
  increment,
  decrement,
};
