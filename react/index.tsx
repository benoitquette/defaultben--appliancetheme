import React from 'react'

type Props = {
  text?: string
}

function TestBen({
  text = ''
}: Props) {}
  return (
    <div>Hello world! ${text}</div>
  )
}

// react/Countdown.tsx
const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate,
}) => {
  return (
    <div>
      <h1>{targetDate}</h1>
    </div>
  )
}

export default TestBen