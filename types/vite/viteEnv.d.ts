//d.ts是类型声明文件
interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_SOME_DAD_URL: string;
}

interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
