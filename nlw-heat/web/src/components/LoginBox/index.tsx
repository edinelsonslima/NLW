import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../context/auth';
import { Loading } from '../Loading';

import styles from './styles.module.scss';

export function LoginBox() {
    const { signInUrl, loading, setLoading } = useContext(AuthContext);
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a
                href={signInUrl}
                className={styles.signInWithGithub}
                onClick={() => setLoading(true)}
            >
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <VscGithubInverted size='24' />
                        Entrar com Github
                    </>
                )}
            </a>
        </div>
    );
}
