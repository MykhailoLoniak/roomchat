interface Message {
  container: string
  messageBox: string
  userNameContainer: string
  userName: string
  userMessageText: string
  timestamp: string
}

export const styles: Message = {
  container: 'm-1',
  messageBox: 'bg-gray-400 w-[660px] rounded-md p-4 flex flex-col',
  userNameContainer: 'flex justify-end',
  userName: 'text-right',
  userMessageText: 'text-right text-sm text-gray-700',
  timestamp: 'text-right text-sm text-gray-700',
}
