"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Ava from '@/assets/images/ava.png';
import Logout from '@/assets/images/logout.svg';
import Col from 'react-bootstrap/Col';
import Cookies from "js-cookie"; // Для работы с куки

const NavigationMenu = () => {
  const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter(); // Хук для редиректа
  const pathname = usePathname();
  const token = Cookies.get("token");

  // Check if the token exists and handle redirect outside of useEffect
  useEffect(() => {
    if (!token && pathname !== "/register") {
      router.push("/"); // Redirect to login if no token and you're not on the registration page
    }
  }, [token, pathname, router]);

  useEffect(() => {
    if (!token) return;

    const fetchUserData = async () => {
      const query = `
        query {
          me {
            id
            name
            email
          }
        }
      `;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Передаем токен в заголовках
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors[0].message);
        }

        setUser(result.data.me); // Сохраняем данные пользователя в стейте
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      }
    };

    fetchUserData();
  }, [token, router]);

  return (
    <>
      <Col className="p-[0] bg-white max-w-[250px] min-w-[200px]">
        <aside className="flex flex-col justify-center items-center gap-[60px] pt-[60px]">
          <div className="w-[150px]">
            <div className="ava-container">
              <Image
                className="ava"
                src={Ava}
                alt="Ava"
                width={120}
                height={120}
              />
              <div onClick={() => {
                Cookies.remove("token");
                router.push("/");
              }} className="absolute right-0 bottom-0 w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center cursor-pointer border-2 border-[#000]">
                <Image
                  className="w-[18px] h-[18px]"
                  src={Logout}
                  alt="logout"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            {user && <p className="mt-2 text-center font-bold text-[18px]">{user.name}</p>}
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
      {error && <p className="text-red-500">{error}</p>} {/* Показываем ошибку, если есть */}
    </>
  );
};

export default NavigationMenu;
