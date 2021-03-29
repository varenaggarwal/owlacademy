import faker from "faker";

export const apiVideoData = [...Array(20)].map((item) => ({
  id: faker.datatype.uuid(),
  name: "INSEAD",
  src:
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8a15043d-4a7b-4e12-ab1a-97d694cdd0ff/GMT20200603-085913_INSEAD-Onl_1920x1080.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210329T112700Z&X-Amz-Expires=86400&X-Amz-Signature=bd077ac69c388e21c0bdd24dd8b091a2be494fa0ae90260763fadffbb9fc2ee6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22GMT20200603-085913_INSEAD-Onl_1920x1080.mp4%22",
}));
