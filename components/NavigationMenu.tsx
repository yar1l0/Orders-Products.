// components/NavigationMenu.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Ava from '@/assets/images/ava.png';
import Col from 'react-bootstrap/Col';
const NavigationMenu = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/"; // Проверяем, если это главная страница
  const isRegisterPage = pathname === "/register";
  return (
    <>

      {!isLoginPage && !isRegisterPage && (
        <Col className="p-[0] bg-white max-w-[250px] min-w-[200px]">
          <aside className="flex flex-col justify-center items-center gap-[60px] pt-[60px]">
            <div>
              <Image
                className="dark:invert"
                src={Ava}
                alt="Ava"
                width={120}
                height={120}
              />
            </div>
            <ul className="list-container">
              <Link href="/orders">
                <li className={`list-container__item ${pathname === "/orders" ? "active" : ""}`}>
                  Приход
                </li>
              </Link>
              <Link href="/products">
                <li className={`list-container__item ${pathname === "/products" ? "active" : ""}`}>
                  Products
                </li>
              </Link>
              <li className="list-container__item">Пользователи</li>
              <li className="list-container__item">Настройки</li>
            </ul>
          </aside>
        </Col>
      )}
    </>
  );
};

export default NavigationMenu;
