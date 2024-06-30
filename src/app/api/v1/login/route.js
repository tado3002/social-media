import prisma from "@/libs/prisma";
export default async function handle(req,res) {
  const { username, password } = await req.json();

  const findUser = await prisma.user.findFirst({
    where: { username: username, password: password },
  });
  return res.status(200).json(findUser)
}
