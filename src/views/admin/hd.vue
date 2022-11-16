<template>
  <div class="inout">
    <form @submit="onsubmit">
      <input type="text" v-model="usernameValue" />
      <p>{{ errors.username }}</p>
      <input type="text" v-model="passwordValue" />
      <p>{{ errors.password }}</p>
      <button>提交</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import validate from "@/plugins/validate";
console.log(validate);
const { handleSubmit, errors } = validate.useForm({
  initialValues: {
    username: "xiangjun",
    password: "",
  },
  validationSchema: {
    username: validate.yup.string().required().email().label("账号"),
    password: {
      required: true,
    },
  },
});
const { value: usernameValue } = validate.useField(
  "username",
  {},
  {
    label: "用户名",
  }
);
const { value: passwordValue } = validate.useField(
  "password",
  {},
  {
    label: "密码",
  }
);
const onsubmit = handleSubmit((values) => {
  console.log(values);
  alert("验证通过");
});
</script>
<style scoped lang="scss">
.inout {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid red;
  }
}
</style>
