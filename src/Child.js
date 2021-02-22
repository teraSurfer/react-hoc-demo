import x from "./UserHOC";

// Child Component not function
// Because this will be used in JSX only and not
// in javascript. the user, hello are props to this component.
// The props are only passed from parent through JSX.
const Child = ({ user, hello, howdy }) => {
  return (
    <div>
      <h1>
        Child 1 {hello} {user.name} {howdy}
      </h1>
    </div>
  );
};

// usual convention for HOC is to start with "with".
export default x(Child);
