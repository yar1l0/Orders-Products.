"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Импортируем библиотеку для работы с куками

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    if (password.length < 8) {
      setError("Пароль должен содержать хотя бы 8 символов");
    } else {
      setError(""); // Если длина пароля правильная, очищаем ошибку
    }
    e.preventDefault();
    setLoading(true);
    setError("");

    const mutation = `
      mutation LoginUser {
        login(
          email: "${email}"
          password: "${password}"
        ) {
          token
          user {
            id
            name
            email
          }
        }
      }
    `;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: mutation }),
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      const { token, user } = result.data.login;
      console.log("User logged in:", user);

      // Сохраняем токен в куки
      Cookies.set("token", token, { expires: 7, path: "/" }); // Токен будет храниться 7 дней

      // Перенаправляем на страницу заказов или другую страницу после успешного логина
      router.push("/orders");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Вход в систему</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={8}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Нет аккаунта?{" "}
          <a href="/register" className="text-blue-500">
            Зарегистрируйтесь
          </a>
        </p>
      </div>
    </div>
  );
}
