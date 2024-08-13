import Image from 'next/image'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div>
        <div className="">
            <Image 
                src={"/logo.png"}
                alt="logo"
                width={150}
                height={150}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default Nav