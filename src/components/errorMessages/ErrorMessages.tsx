import React from 'react'

interface Props {
  message?: string
}

const ErrorMessage: React.FC<Props> = ({ message }) =>
  message ? <p className="text-red-500 text-sm -mt-2">{message}</p> : null

export default ErrorMessage
