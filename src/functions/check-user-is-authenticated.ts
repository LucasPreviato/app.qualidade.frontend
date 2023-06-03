import { getStorageItem } from '@/utils/get-storage-item'

export const checkUserAuthenticated = () => {
  const userToken = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN)

  return !!userToken
}
