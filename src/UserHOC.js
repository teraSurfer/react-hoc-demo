import user from "./user.json";

const withUser = (Component) => {
  console.log(user);
  return (props) => {
    return <Component user={user} {...props} />;
  };
};

export default withUser;
