import _ from "lodash";
class Helper {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnv();
  }
  private getEnv(): ImportMetaEnv {
    //使用深拷贝进行类型转换
    const envs: any = _.cloneDeep(import.meta.env);
    Object.entries(envs as Record<string, any>).forEach(([key, value]) => {
      if (value == "true" || value == "false")
        envs[key] = value == "true" ? true : false;
      else if (/^\d+$/.test(value)) envs[key] = Number(value);
      else if (value == "null") envs[key] = null;
      else if (value == "undefined") envs[key] = undefined;
    });
    return envs;
  }
}
const helper = new Helper();
const env = helper.env;
export { env, helper };
