"use client"

import { useEffect } from "react"

export function TawkWidget() {
  useEffect(() => {
    // Initialize Tawk.to
    var Tawk_API = (window as any).Tawk_API || {}
    var Tawk_LoadStart = new Date()
    ;(function () {
      var s1 = document.createElement("script")
      var s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = "https://embed.tawk.to/6a4d03916d0b681d4b50f9bb/1jsudbsj9"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")
      s0.parentNode?.insertBefore(s1, s0)
    })()
  }, [])

  return null
}
