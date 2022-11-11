import { http } from "../plugins/axios";
interface User {
  name: string;
  age: number;
  avater: string;
}
export async function info() {
  return http.request<User>({ url: "info" });
}
