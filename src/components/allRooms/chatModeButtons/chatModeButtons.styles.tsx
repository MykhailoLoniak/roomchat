export interface ChatModeButtonsStyles {
  container: string
  buttonWrapper: string
  button: string
  activeButton: string
}

export const styles: ChatModeButtonsStyles = {
  container: 'w-full flex justify-center',
  buttonWrapper: 'inline-block bg-[#7878801F] rounded-xl p-1 mt-12',
  button: 'h-6 w-[180px] rounded-xl',
  activeButton: 'bg-[#ffffff]',
}
