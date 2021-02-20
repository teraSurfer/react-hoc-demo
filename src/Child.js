import withUser from "./UserHOC";

const Child = ({ user, hello }) => {
  return (
    <div>
      <h1>
        Child 1 {hello} {user.name}
      </h1>
    </div>
  );
};

export default withUser(Child);
