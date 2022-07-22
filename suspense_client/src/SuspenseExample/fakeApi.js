export function fetchProfileData() {
  let userPromise = fetchUser();
  let postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "SeoWS2",
      });
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 0,
          text: "멋진 태양이야..",
        },
        {
          id: 1,
          text: "멋진 바다야...",
        },
        {
          id: 2,
          text: "멋진 산이야...",
        },
      ]);
    }, 2000);
  });
}
