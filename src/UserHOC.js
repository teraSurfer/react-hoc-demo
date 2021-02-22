import users from "./user.json";

function dispatch(type) {
  switch (type) {
    case "DELETE":
      console.log("deleted player");
      break;
    case "UPDATE":
      console.log("updated player");
      // this will return updated users
      break;
    default:
      break;
  }
}

// x is function which takes 2 values a and b.
// Both are functions. ex. a = findPlayerByName, b = updatePlayerByName
function x(a, b) {
  const user = a(users);

  // resembles reducer functionality
  const actions = b(dispatch);
  // z is a function which accepts a component as input
  return function z(Component) {
    // y is a HigherOrderComponent
    // which takes props from its caller (App.js) and passes it to
    // its child component (Child.js).
    return function y(props) {
      console.log(props);
      return <Component user={user} {...actions} {...props} />;
    };
  };
}

export default x;
