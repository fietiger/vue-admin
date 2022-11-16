import * as veeValidate from "vee-validate";
import rules from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import yup from "./yup";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
//引入中文包
veeValidate.configure({
  generateMessage: localize("zh-CN", zh_CN),
});
//导入全部规则
Object.keys(rules).forEach((rule) => {
  veeValidate.defineRule(rule, rules[rule]);
});

const modules = {
  yup,
  ...veeValidate,
};
export default modules;
