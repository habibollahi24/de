import AuthForm from '@/components/AuthForm';
import Image from 'next/image';
import styles from './AuthPage.module.scss';
export default function AuthPage() {
  return (
    <div className={styles.authPageWraper}>
      <div className={styles.imageContainer}>
        <Image src="/elv.jfif" alt="bg" fill priority />
      </div>
      <div className={styles.formContainer}>
        <AuthForm />
      </div>
    </div>
  );
}
