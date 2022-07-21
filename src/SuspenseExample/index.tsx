import { Suspense } from "react";
import User from "./User";
import UserDetail from "./UserDetail";

const SuspenseExample = () => {
  return (
    <Suspense fallback={<div>멋진 로딩 문구...</div>}>
      <User />
      <Suspense fallback={<div>유저 디테일 로딩 문구...</div>}>
        <UserDetail />
      </Suspense>
    </Suspense>
  );
};

export default SuspenseExample;
