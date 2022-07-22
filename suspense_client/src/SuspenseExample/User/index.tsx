import { fetchProfileData } from "../fakeApi";

const resource = fetchProfileData();

const User = () => {
  const user = resource.user.read();

  return <h1>{user.name}</h1>;
};

export default User;
