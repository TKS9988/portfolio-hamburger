import style from './index.module.scss'
type Props = {
    currnetPathName: string;
}
const Title = (props: Props) => {
    return (
        <h2 className={style['title']}>{props['currnetPathName'] === 'signup' ? 'ご登録' : 'ログイン'}</h2>
    )
}
export default Title