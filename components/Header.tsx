'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import socket from "@/socket";
import "@/styles/Header.sass";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from '@/assets/images/logo.png'
import { TEST_QUERY } from "@/graphql/queries/getItems";
import { useQuery } from "@apollo/client";


const Header: React.FC = () => {
  const [dateTime, setDateTime] = useState<string | null>(null);
  const [activeSessions, setActiveSessions] = useState<number>(0);
  const { loading, error, data } = useQuery(TEST_QUERY);

  useEffect(() => {
    console.log("Data:", data);
    if (error) console.error(error);
  }, [data, loading, error]);

  useEffect(() => {
    // Set date and time only on the client
    setDateTime(new Date().toLocaleString());

    //Update date every second
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    // Connecting to WebSocket
    socket.on("active_sessions", (count: number) => {
      setActiveSessions(count);
    });

    return () => {
      clearInterval(interval);
      socket.off("active_sessions");
    };
  }, []);
  const pathname = usePathname();
  const isLoginPage = pathname === "/";
  const isRegisterPage = pathname === "/register";
  return (
    <>
      {!isLoginPage && !isRegisterPage && (
        <header className="header shadow-sm">
          <div>
            <Link href='/'  className="header__left">
              <Image
                className="dark:invert"
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
              />
              <h1 className="header__title">Inventory</h1>
            </Link>
          </div>
          <div className="form-outline max-w-[500px] w-[100%]" data-mdb-input-init>
            <input type="search" id="form1" className="form-control header__search" placeholder="Поиск" aria-label="Search" />
          </div>
          <div className="header__right">
            {/* Show date only if useEffect has already run */}
            {dateTime ? <span className="header__datetime">{dateTime}</span> : null}
            <span className="header__sessions">🟢 {activeSessions} online</span>
          </div>
        </header>

      )}
    </>
  );
};

export default Header;
