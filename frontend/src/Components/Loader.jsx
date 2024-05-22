import React from 'react'
import { MutatingDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
        <MutatingDots
    visible={true}
    height="100"
    width="100"
    color="#C81912"
    secondaryColor="#C81912"
    radius="10.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </div>
  )
}

export default Loader