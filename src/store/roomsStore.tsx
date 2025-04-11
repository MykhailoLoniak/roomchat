import { create } from 'zustand'
import { RoomType } from '../types/RoomType'

export const rooms: RoomType[] = [
  {
    id: '1',
    title: 'Books & Reading',
    description: 'Book recommendations, reviews, and literary discussions',
    category: 'Education',
  },
  {
    id: '2',
    title: 'Technology & Programming',
    description:
      'Discuss the latest in tech, software development, and coding languages',
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Music Lovers',
    description: 'Share your favorite music, artists, and discuss new releases',
    category: 'Entertainment',
  },
  {
    id: '4',
    title: 'Movies & TV Shows',
    description:
      'Talk about your favorite movies, TV shows, and upcoming releases',
    category: 'Entertainment',
  },
  {
    id: '5',
    title: 'Gaming Community',
    description: 'A place for gamers to connect, share tips, and discuss games',
    category: 'Gaming',
  },
  {
    id: '6',
    title: 'Travel & Adventure',
    description:
      'Explore new places, share travel tips, and talk about adventure',
    category: 'Lifestyle',
  },
  {
    id: '7',
    title: 'Food & Cooking',
    description: 'Share recipes, cooking tips, and food experiences',
    category: 'Lifestyle',
  },
  {
    id: '8',
    title: 'Sports & Fitness',
    description:
      'Discuss your favorite sports, fitness routines, and health tips',
    category: 'Health & Fitness',
  },
  {
    id: '9',
    title: 'Art & Creativity',
    description: 'A place to share art, creativity, and inspiration',
    category: 'Art',
  },
  {
    id: '10',
    title: 'Pets & Animals',
    description: 'A space for pet lovers to share experiences and advice',
    category: 'Lifestyle',
  },
]

interface RoomsState {
  rooms: RoomType[]
  setRooms: (rooms: RoomType[]) => void
}

const useRoomsStore = create<RoomsState>((set) => ({
  rooms: rooms,
  setRooms: (rooms) => set({ rooms }),
}))

export default useRoomsStore
