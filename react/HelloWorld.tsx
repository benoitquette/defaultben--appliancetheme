import React from "react"

type Props = {
    name: string
  }

const HelloWorld = ({ name }: Props) => {
    return (
        <div>Hello World  {name}</div>
    )
}

export default HelloWorld