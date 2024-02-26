import sanityClient from "@/app/libs/sanity";

export const getUserByEmail = async (email: string) => {
  console.log("email", email);
  try {
    const user = await sanityClient.fetch(
      `*[_type == "user" && email == $email][0] {
            _id,
            name,
            isAdmin,
            email,
            emailVerified,
            about
        }`,
      { email: email }
    );

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  console.log("id", id);
  try {
    const user = await sanityClient.fetch(
      `*[_type == "user" && _id == $id][0] {
           name,
            isAdmin,
            email,
            emailVerified
        }`,
      { id: id }
    );

    return user;
  } catch {
    return null;
  }
};
