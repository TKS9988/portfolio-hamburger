type Props = {
    currnetPathName: string;
}
const Register = (props: Props) => {
    return (
        <button>{props['currnetPathName'] === 'signup' ? 'ご登録' : 'ログイン'}</button>
    )
}
export default Register