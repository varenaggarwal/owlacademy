import faker from "faker";

export const apiVideoData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
  (item) => ({
    id: item,
    name: faker.commerce.productName(),
    thumbnailImg: faker.image.image(),
    srcUrl: faker.random.arrayElement([
      "https://www.youtube.com/watch?v=oUFJJNQGwhk",
      "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      "https://www.youtube.com/watch?v=jNgP6d9HraI",
    ]),
    duration: faker.datatype.number(),
    description: faker.commerce.productDescription(),
    userNotes: [],
  })
);

// import faker from "faker";

// export const apiVideoData = [...Array(20)].map((item) => ({
//   id: faker.datatype.uuid(),
//   name: faker.commerce.productName(),
//   thumbnailImg: faker.image.image(),
//   srcUrl: faker.random.arrayElement([
//     "https://www.youtube.com/watch?v=oUFJJNQGwhk",
//     "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//     "https://www.youtube.com/watch?v=jNgP6d9HraI",
//   ]),
//   duration: faker.datatype.number(),
//   description: faker.commerce.productDescription(),
//   userNotes: [],
// }));
