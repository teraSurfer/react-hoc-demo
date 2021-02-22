import user from "./user.json";

// x is a function
function x(Component) {
  // y is a HigherOrderComponent
  // which takes props from its caller (App.js) and passes it to
  // its child component (Child.js).
  return function y(props) {
    console.log(props);
    return <Component user={user} {...props} />;
  };
}

// const withUser = () => {
//   return x;
// };

export default x;
