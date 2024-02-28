import account from "./account";
import passwordResetToken from "./passwordResetToken";
import user from "./user";
import verificationToken from "./verificationToken";

export const schemaTypes = [
  user,
  account,
  verificationToken,
  passwordResetToken,
];
