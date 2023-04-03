type SideBarProps = {
    name: string;
    link: string;
}[]

export const SIDEBAR: SideBarProps = [
    { "name": "登録・編集", "link": "/dashboard/register" },
    { "name": "予約", "link": "/dashboard/recommend" },
]

export const SIGNUP = [
    { name: 'お名前', type: 'text', label: 'name' },
    { name: 'メールアドレス', type: 'email', label: 'email' },
    { name: 'パスワード', type: 'password', label: 'password' },
    { name: 'パスワード確認', type: 'password', label: 'passwordconfirmation' },
]

export const SIGNIN = [
    { name: 'メールアドレス', type: 'email', label: 'email' },
    { name: 'パスワード', type: 'password', label: 'password' },
]

export const SIGNUPPAGELINK = [
    { text: 'ログインはこちら', link: '/dashboard/signin' }
]

export const SIGNINPAGELINK = [
    { text: 'ご登録はこちら', link: '/dashboard/signup' }
]