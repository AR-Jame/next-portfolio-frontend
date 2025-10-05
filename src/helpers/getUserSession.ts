import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"

export const getUserSession = async () => {
    const user =  await getServerSession(authOptions)
    return user
}