import { Poppins } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
})
export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
})

export const indigo = localFont(
    {
        src: './public/font/Indigo_Regular.otf',
        weight: '400',
        style: 'normal',
        display: 'swap',
    }


)
export const brush = localFont(
    {
        src: './public/font/Regular_Brush.ttf',
        weight: '400',
        style: 'normal',
        display: 'swap',
    }


)