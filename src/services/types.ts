//文件将有助于定义主要类型

//公共响应对象
export type APIResponse<T> = {
  success: boolean;
  content: T;
  status?: number;
};
