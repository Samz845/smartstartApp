export type user = {
  token: string;
  user: user;
};

export type userLoginProp = {
  email: string;
  password: string;
};

export type userSignUpProp = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type UploadDocumentResponse = {
  message: string;
  document: {
    id: string;
  };
};

export type UploadDocumentProps = {
  documentType: string;
  file: File;
};
