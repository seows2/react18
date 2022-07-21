import { fetchProfileData } from "../fakeApi";

const resource = fetchProfileData();

const UserDetail = () => {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};

export default UserDetail;
