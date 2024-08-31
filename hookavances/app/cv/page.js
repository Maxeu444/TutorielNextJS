'use client'
import Link from "next/link"
import { useThemeContext } from "@/context/theme"

const Cv = () => {

    const  { background, setBackground } = useThemeContext()
  return (
    <>
        <div style={{
            'background':background,
            'width': '500px',
            'height': '500px'
        }}>
        </div>
        <Link href="/contact">Contact</Link>
    </>
  )
}

export default Cv