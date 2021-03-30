import faker from "faker";

export const apiVideoData = [...Array(20)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  src: faker.random.arrayElement([
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  ]),
  duration: faker.datatype.number(),
}));
