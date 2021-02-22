import x from "./UserHOC";

// Child Component not function
// Because this will be used in JSX only and not
// in javascript. the user, hello are props to this component.
// The props are only passed from parent through JSX.
const Child = ({ user, hello, howdy, update, del }) => {
  return (
    <div>
      <h1>
        Child 1 {hello} {user.name} {howdy}
        <button onClick={update}>UPDATE</button>
        <button onClick={del}>DELETE</button>
      </h1>
    </div>
  );
};

function a(users) {
  return users.find((usr) => usr.name === "Virat");
}
// Since we don't have access to dispatch, we have to
// create a separate function which maps a prop to our required
// action.
function b(dispatch) {
  return {
    update: () => dispatch("UPDATE"),
    del: () => dispatch("DELETE")
  };
}

// usual convention for HOC is to start with "with".
// Child is being passed to z function which is returned by x
// x(a, b) prepares user object and action function object.
// x(a, b)(Child) wraps the child component with our HOC
// and passes user, action props to this child component.
export default x(a, b)(Child);
