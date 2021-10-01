import React from 'react'
import dynamic from 'next/dynamic';
// because react-admin doesn't support server side rendering i guess.
const AdminPanel = dynamic(() => import('../components/AdminPanel'), {
  ssr: false
})

const index = () => {
  return (<AdminPanel />)
}

export default index;
