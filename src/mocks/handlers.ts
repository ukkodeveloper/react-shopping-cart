import { rest } from 'msw';

const productList = [
  {
    id: 1,
    name: 'PET보틀-정사각(420ml)',
    price: 43400,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 2,
    name: 'PET보틀-밀크티(370ml)',
    price: 73400,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 3,
    name: 'PET보틀-정사각(370ml)',
    price: 41000,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 4,
    name: 'PET보틀-납작(450ml)',
    price: 10000,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 5,
    name: 'PET보틀-단지(480ml)',
    price: 41000,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 6,
    name: 'PET보틀-납작(260ml)',
    price: 61800,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 7,
    name: 'PET보틀-원형(500ml)',
    price: 42200,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 8,
    name: 'PET보틀-원형(600ml)',
    price: 44500,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 9,
    name: 'PET보틀-정사각(420ml)',
    price: 43400,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 10,
    name: 'PET보틀-밀크티(370ml)',
    price: 73400,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 11,
    name: 'PET보틀-정사각(370ml)',
    price: 41000,
    imageUrl: 'http://placekitten.com/200/200',
  },
  {
    id: 12,
    name: 'PET보틀-납작(450ml)',
    price: 39900,
    imageUrl: 'http://placekitten.com/200/200',
  },
];

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(200), ctx.json(productList));
  }),
];
