
//接口类型示例
export type School = {
  id: number;
  name: string;
  description: string;
};

export type InputCreateSchool = {
  id: number;
  name: string;
  description: string;
};

export type InputUpdateSchool = {
  id: number;
  description: string;
};