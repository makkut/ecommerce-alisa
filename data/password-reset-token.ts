import sanityClient from "@/app/libs/sanity";

export const getPasswordResetTokenByToken = async (token: string) => {
  console.log("token", token);
  try {
    const passwordResetToken = await sanityClient.fetch(
      `*[_type == "password-reset-token" && token == $name][0] {
            _id,
            email,
            token

        }`,
      { name: token }
    );
    console.log("getPasswordResetTokenByToken", passwordResetToken);
    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await sanityClient.fetch(
      `*[_type == "password-reset-token" && email == $email][0] {
            _id,
            email,
            token
        }`,
      { email: email }
    );
    console.log("getPasswordResetTokenByEmail", passwordResetToken);
    return passwordResetToken;
  } catch {
    return null;
  }
};
