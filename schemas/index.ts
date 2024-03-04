import account from "./account";
import blockContent from "./blockContent";
import category from "./category";
import color from "./color";
import passwordResetToken from "./passwordResetToken";
import product from "./product";
import user from "./user";
import verificationToken from "./verificationToken";

export const schemaTypes = [
  user,
  account,
  verificationToken,
  passwordResetToken,
  category,
  product,
  blockContent,
  color,
];
