import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../firebase/clientApp"
import { doc, setDoc } from "firebase/firestore"
import Router from "next/router"

export const converte = (valueData: any, newSignup: any) => {
    if (valueData['length'] !== 0) {
        for (var i = 0, lrng = newSignup['length'], certificationConviner = Object['create'](null); i < lrng; ++i) {
            if (valueData.hasOwnProperty(i)) {
                certificationConviner[newSignup[i]] = valueData[i];
            }
        }
        return certificationConviner
    } else return
}

export const toSignUp = (props: any) => {
    const { name, email, password, passwordconfirmation } = props
    if (name === "" || email === "" || password === "" || passwordconfirmation === "") {
        alert("必須項目が未入力です。");
        return false
    }
    if (password !== passwordconfirmation) {
        alert("パスワードが一致しません。");
        return false
    }
    if (password.length < 6) {
        alert("パスワードは6文字以上で入力してください。");
        return false
    }
    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const user = userCredential.user;
        if (user.uid) {
            const docRef = doc(db, "user", user.uid);
            const data = {
                name: name,
            }
            await setDoc(docRef, data).then(() => {
                alert('登録が完了しました。')
                Router.push('/dashboard')
            }).catch(async () => {
                alert("登録できませんでした。");
            });
        }
    })
}

export const toSignin = (props: any) => {
    const { email, password } = props
    if (email === "" || password === "") {
        alert('メールアドレスかパスワードが未入力です。')
        return false
    }
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            Router.push('/dashboard')
        })
        .catch(() => {
            alert("ログインできませんでした。。。");
        });
}
