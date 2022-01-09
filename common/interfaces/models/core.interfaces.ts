export interface ICore {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICoreSoftDelete extends ICore {
  deletedAt: Date;
}
