import { useParams } from 'react-router-dom'
import { GetMessages } from '../components/message/GetMessages'

export const SelectedRoom = () => {
  const params = useParams()

  return (
    <div className=" flex justify-between">
      <GetMessages />
    </div>
  )
}
