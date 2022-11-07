//d.ts是类型声明文件
interface ViteEnv {
  VITE_SOME: number;
  VITE_SOME_DAD: boolean;
  VITE_SOME_DAD_URL: string;
}

interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
