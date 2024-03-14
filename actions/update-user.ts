"use server";

import * as z from "zod";

import { getUserById } from "@/data/user";
import { AccountSchema } from "@/schemas-form";
import sanityClient from "@/app/libs/sanity";
import { User } from "@/type";

export const updateUser = async (
  values: z.infer<typeof AccountSchema>,
  user?: User
) => {
  const validatedFields = AccountSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  if (!user) {
    return { error: "Invalid" };
  }

  const {
    data: { firstname, lastname, street, house, zip, city, country },
  } = validatedFields;

  const existingUser = await getUserById(user.id!);
  if (!existingUser) {
    return { error: "Id does not exist!" };
  }

  await sanityClient
    .patch(existingUser._id)
    .set({
      firstname: firstname,
      lastname: lastname,
      street: street,
      house: house,
      zip: zip,
      city: city,
      country: country,
    })
    .commit();

  return { success: "Данные обновлены!" };
};
