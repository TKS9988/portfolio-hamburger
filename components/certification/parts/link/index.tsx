import Link from 'next/link'
import { SIGNUPPAGELINK, SIGNINPAGELINK } from '../../data'

type Props = {
    currnetPathName: string;
}

const LinkText = (props: Props) => {
    return (
        <Link href={props['currnetPathName'] === 'signup' ? SIGNUPPAGELINK[0]['link'] : SIGNINPAGELINK[0]['link']}>
            {props['currnetPathName'] === 'signup' ? SIGNUPPAGELINK[0]['text'] : SIGNINPAGELINK[0]['text']}
        </Link>
    )
}
export default LinkText