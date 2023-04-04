import Mockadapter from "axios-mock-adapter"
import axios from "axios"
import { calShabu } from "../shabu"

describe('cal shabu', () => {
  const mock = new Mockadapter(axios)
 
  test.each([
    {
      num: 1, expectedResult: 374,
    },
    {
      num: 2, expectedResult: 748,
    },
    {
      num: 3, expectedResult: 1122,
    },
    {
      num: 4, expectedResult: 1122
    },
    {
      num: 5, expectedResult: 1870
    },
    {
      num: 6, expectedResult: 2244
    },
    {
      num: 7, expectedResult: 2618
    },
    {
      num: 8, expectedResult: 2244
    }
  ])("should get sum price", async ({ num, expectedResult }) => {
    mock.onGet('/price').reply(200, {
      statusCode: 1,
      status: "success",
      msg: "",
      data:
      {
        price: 340,
        serviceChange: 10
      }
    });
    expect(await calShabu(num)).toBe(expectedResult);
  });
})