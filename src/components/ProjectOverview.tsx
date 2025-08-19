import React from 'react';
import styles from './projectOverview.module.scss';
import Link from 'next/link';
import OnlyLoggedIn from './OnlyLoggedIn';
import OnlyLoggedOut from './OnlyLoggedOut';
import Button from './Button';
import Card from './Card';

const ProjectOverview = () => {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <h3> درباره پروژه </h3>
        <OnlyLoggedIn>
          <Link href="/dashboard">
            <Button>داشبورد</Button>
          </Link>
        </OnlyLoggedIn>
        <OnlyLoggedOut>
          <Link href="/auth">
            <Button>ورود</Button>
          </Link>
        </OnlyLoggedOut>
      </div>
      <ul className={styles.projectOverview}>
        <li>
          در این پروژه از <b>Next.js</b> به همراه <b>TypeScript</b> و{' '}
          <b>SCSS</b> استفاده شده است.
        </li>
        <li>
          به <code>https://randomuser.me/api/?results=1&nat=us</code>{' '}
          درخواست زده شده و اطلاعات یک کاربر نمونه دریافت می‌شود.
        </li>
        <li>در داخل فرم از اعتبارسنجی لحظه‌ای استفاده شده است.</li>
        <li>
          موقع فشردن دکمه ورود، درخواست API ذکرشده ارسال می‌شود.
        </li>
        <li>
          برای مدیریت سطح دسترسی کاربران از <b>Layout</b> استفاده شده
          است.
        </li>
        <li>
          اطلاعات کاربر دریافت‌شده از API به همراه داده‌های فرم، هم در{' '}
          <b>localStorage</b> ذخیره می‌شوند و هم در <b>Context API</b>{' '}
          قرار می‌گیرند.
        </li>
        <li>
          از کامپوننت‌های <b>OnlyLoggedOut</b> و <b>OnlyLoggedIn</b>{' '}
          برای نمایش دکمه‌های مناسب بسته به وضعیت کاربر استفاده شده
          است.
        </li>

        <li>
          اعتبارسنجی فرم‌ها توسط کتابخانه <b>Zod و react hook form</b>{' '}
          پیاده‌سازی شده است.
        </li>
      </ul>
    </Card>
  );
};

export default ProjectOverview;
