// initialize admin
import '../../utils/firebaseAdmin'
import type { NextApiRequest, NextApiResponse } from 'next'
import ServerSideResolver from 'ra-next-firebase-provider/dist/serverSideDataResolver'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const resolver = new ServerSideResolver();

  // TODO: we should be able to pass the req obect to resolver and automatically return data;
  const data = await resolver.getUsers()
console.log(data)
  res.status(200).json(data)
}
