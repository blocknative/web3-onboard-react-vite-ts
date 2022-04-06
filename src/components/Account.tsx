import React from 'react'
import { useState } from 'react'

const trunc = (address: string) => address.slice(0, 8) + '...' + address.slice(-8)

interface Props {
  className?: string
  address?: string
}

const NetworkDetails = (
  <React.Fragment>
    <div className="">Network: Main</div>
  </React.Fragment>
)

const Account = ({ className = '', address }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} cursor-pointer transition-all ease-in-out p-4 hover:shadow-lg rounded-lg text-sm flex flex-col self-end justify-between absolute top-4 right-5`}
    >
      <div className="flex items-center">
        <div
          className={`indicator-item badge ${
            address ? 'badge-success' : 'badge-error'
          } badge-xs mr-2`}
        ></div>
        <div className="whitespace-pre">
          {address ? (isHovered ? address : trunc(address)) : 'Not Connected'}{' '}
        </div>
      </div>
    </div>
  )
}

export default Account
