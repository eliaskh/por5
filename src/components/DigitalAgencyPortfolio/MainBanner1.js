import React from "react"
import { Link } from "gatsby"

import Loadable from "@loadable/component"

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false)

  React.useEffect(() => {
    setDisplay(true)
  }, [])

  return (
    <>
      <div>hello</div>
    </>
  )
}

export default MainBanner
