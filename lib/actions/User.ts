import prisma from "../db";

export type TUser = {
  name: string;
  email: string;
  image: string;
};

export async function createUser(user: TUser) {
  const { name, email, image } = user;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        image,
      },
    });
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create user");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to retrieve user");
  }
}
