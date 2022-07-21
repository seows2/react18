import useData from "../../hook/useData";

const User = () => {
  const { data, isLoading } = useData("seows2");

  if (isLoading) {
    return <div>멋진 로딩 화면...</div>;
  }

  return (
    <>
      <img
        src={data.avatar_url}
        alt="아바타 이미지"
        style={{ width: "100px" }}
      />
      <span>{data.name}</span>
    </>
  );
};

export default User;
