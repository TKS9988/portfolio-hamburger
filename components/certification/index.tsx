import { useRef, RefObject, createRef, forwardRef, useState } from 'react'
import { Register, Title, LinkText } from './parts'
import { SIGNUP, SIGNIN } from './data'
import style from './index.module.scss'
import { converte, toSignUp, toSignin } from './converte'
import { useRouter } from "next/router";

type Props = {
    name: string;
    type: string;
    label: string;
    value: string;
}

const Contents = () => {

    const router = useRouter();
    const currnetPathName = router['pathname']['split']("/")['slice'](-1)[0]
    const currentData = (currnetPathName: string) => {
        if (currnetPathName === 'signup') return SIGNUP
        else return SIGNIN
    }
    const DATA = currentData(currnetPathName)
    const dataRef = useRef<RefObject<HTMLInputElement>[]>([])
    const newSignup = DATA['map']((list) => list['label']);
    newSignup['forEach']((_, index) => {
        dataRef['current'][index] = createRef<HTMLInputElement>()
    })

    const [valueData, setValueData] = useState<any[]>([])
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data: any[] = []
        for (let i = 0; i < DATA['length']; i++) {
            data.push(dataRef['current'][i]?.['current']?.value)
        }
        setValueData(data)
        if (currnetPathName === 'signup') toSignUp(converte(data, newSignup))
        if (currnetPathName === 'signin') toSignin(converte(data, newSignup))
        console.log(converte(data, newSignup))
    }

    const InputItem = forwardRef<HTMLInputElement, Props>((props, ref) => {
        const inputRef = ref as React.MutableRefObject<HTMLInputElement>
        return <input className={style['form__list']} id={props['label']} type={props['type']} name={props['label']} placeholder={props['name']} ref={inputRef} defaultValue={props['value']} />
    })

    return <div className={style['right']}>
        <form onSubmit={handleSubmit} className={style['form']}>
            <Title currnetPathName={currnetPathName} />
            {DATA['map']((list, index) => (
                <div key={index}>
                    <label className={style['form__label']} htmlFor={list['label']}>{list['name']}</label>
                    <InputItem ref={dataRef['current'][index]} type={list.type} name={list['name']} label={list['label']} value={valueData[index]} />
                </div>
            ))}
            <div className={style['form__button']}><Register currnetPathName={currnetPathName} /></div>
            <div className={style['form__link-text']}><LinkText currnetPathName={currnetPathName} /></div>
        </form>
    </div >
}
export default Contents