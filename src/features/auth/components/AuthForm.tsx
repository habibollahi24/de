'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';

import getUser from '@/data/getUser';
import styles from './authForm.module.scss';
import { useUser } from '@/context/UserProvider';
import { formatPhone } from '@/helper/utils';

import Button from '@/components/Button';
import InputField from '@/components/TextInput';
import Card from '@/components/Card';

type FormValues = {
  nickName: string;
  email: string;
  phoneNumber: string;
};

const schema = z.object({
  nickName: z.string().min(2, 'حداقل ۲ کاراکتر لازم است'),
  email: z.email('ایمیل معتبر نیست'),
  phoneNumber: z
    .string()
    .regex(
      /^09\d{2} \d{3} \d{4}$/,
      'شماره موبایل معتبر وارد کنید (مثال: 09123456789)'
    ),
});

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const { addUser } = useUser();

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formatted = formatPhone(e.target.value);
    setValue('phoneNumber', formatted, {
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const onSubmit = async (data: FormValues) => {
    //request to api
    const res = await getUser();

    //extract data
    const { results } = res;
    //create userData
    const user = {
      ...results[0],
      nickName: data.nickName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    addUser(user);
    router.push('/dashboard');
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2> ورود</h2>

        <InputField
          label="نام مستعار"
          name="nickName"
          type="text"
          placeholder=""
          register={register('nickName')}
          error={errors.nickName}
        />
        <InputField
          label="ایمیل"
          name="email"
          type="email"
          dir="ltr"
          placeholder="@"
          register={register('email')}
          error={errors.email}
        />
        <InputField
          label="شماره تلفن"
          name="phoneNumber"
          type="tel"
          placeholder="09"
          register={register('phoneNumber')}
          error={errors.phoneNumber}
          onChange={handlePhoneChange}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'منتظر بمانید...' : 'ورود'}
        </Button>
      </form>
    </Card>
  );
}
