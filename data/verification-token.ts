import sanityClient from "@/app/libs/sanity";

export const getVerificationTokenByToken = async (token: string) => {
  console.log("token", token);
  try {
    const verificationToken = await sanityClient.fetch(
      `*[_type == "verification-token" && token == $name][0] {
            _id,
            identifier
        }`,
      { name: token }
    );

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await sanityClient.fetch(
      `*[_type == "verification-token" && identifier == $identifier][0] {
            _id
        }`,
      { identifier: email }
    );

    return verificationToken;
  } catch {
    return null;
  }
};
