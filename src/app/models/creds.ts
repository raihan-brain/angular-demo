export interface Signup {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface SignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
