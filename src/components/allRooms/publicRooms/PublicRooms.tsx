import { AllRooms } from '../AllRooms'
import { RecentRooms } from '../recentRooms'

export const PublicRooms = () => {
  return (
    <>
      <RecentRooms />
      <hr className="border-t-2 border-gray-300 my-4" />
      <AllRooms />
    </>
  )
}
