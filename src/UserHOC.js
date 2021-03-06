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
  // y is a HigherOrderComponent
  return function y(Component) {
    // z is the rendered component
    // which takes props from its caller (App.js) and passes it to
    // its child component (Child.js).
    return function z(props) {
      console.log(props);
      return <Component user={user} {...actions} {...props} />;
    };
  };
}

export default x;
