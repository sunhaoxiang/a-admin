import { useEffect } from 'react'

const useFixAntd = () => {
  useEffect(() => {
    const head = document.querySelector('head') as HTMLHeadElement
    const tailWindStyleTag = [...head.querySelectorAll('style')].find(style =>
      style.innerHTML.includes('tailwind')
    ) as HTMLStyleElement
    head.insertAdjacentElement('afterbegin', tailWindStyleTag)
  }, [])
}

export default useFixAntd
