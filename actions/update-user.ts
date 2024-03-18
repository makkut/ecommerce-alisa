import { getUserById } from "@/data/user";
import { AccountSchema } from "@/schemas-form";
import sanityClient from "@/app/libs/sanity";
import { UpdateUser } from "@/app/account/components/AccountForm";

export const updateUser = async (values: UpdateUser) => {
  console.log("values", values);
  const validatedFields = AccountSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const existingUser = await getUserById(values?.user?._id!);

  if (!existingUser) {
    return { error: "Id does not exist!" };
  }

  await sanityClient
    .patch(existingUser._id)
    .set({
      firstname: values.values.firstname,
      lastname: values.values.lastname,
      street: values.values.street,
      house: values.values.house,
      zip: values.values.zip,
      city: values.values.city,
      country: values.values.country,
    })
    .commit();

  return { success: "Данные обновлены!" };
};
