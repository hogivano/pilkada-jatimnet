import dynamic from 'next/dynamic'
import React from 'react'

const noSsr = dynamic(
  () => import('./index/ListCategory'),
  {
    ssr: false
  }
)

export default () => <noSsr />
