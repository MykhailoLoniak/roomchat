interface Styles {
  card: string
  link: string
  title: string
  description: string
  divider: string
  footer: string
  messages: string
  users: string
  userStatus: string
  greenDot: string
}

export const styles: Styles = {
  card: 'bg-white rounded-md py-4 px-6',
  link: 'flex flex-col justify-between min-h-[200px]',
  title: 'poppins-semibold text-[22px] pt-2',
  description: 'poppins-regular text-sm text-gray-400',
  divider: 'border-t-2 border-gray-300 mb-4',
  footer:
    'flex justify-between items-center text-gray-400 poppins-regular text-sm',
  messages: 'flex gap-2 items-center',
  users: 'flex gap-2 items-center',
  userStatus: 'flex items-center gap-1',
  greenDot: 'inline-block h-2 w-2 rounded-full bg-green-500',
}
