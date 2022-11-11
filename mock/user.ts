import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: "vben",
        },
      };
    },
  },
] as MockMethod[];
