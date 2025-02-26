'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Monitor from '@/assets/images/monitor.png'
import Delete from '@/assets/images/delete.svg'
import Modal from '@/components/Modal'
import Menu from '@/assets/images/burger-menu.png'
import Plus from '@/assets/images/plus.png'
import ProductTable from '@/components/ProductTable'
import Cookies from "js-cookie";


export default function Prosucts() {
  const DataArray = [
    {
      title: "Длинное предлинное длиннючее название прихода",
      image: Monitor,
      status: "В ремонте",
      quantity: "23",
      model: "X58-USB3",
      warrantyStart: "06/04/2017",
      warrantyEnd: "06/08/2025",
      condition: "Б/У",
      priceUSD: "2 500 $",
      priceUAH: "250 000.50 UAH",
      groupName: "Длинное предлинное название группы", // Если пусто, отобразится "—"
      arrivalName: "Длинное предлинное название прихода",
      date: "06/12/2017",
    },
    {
      title: "Длинное название прихода",
      image: Monitor,
      status: "В ремонте",
      quantity: "23",
      model: "X58-USB3",
      warrantyStart: "06/04/2017",
      warrantyEnd: "06/08/2025",
      condition: "Б/У",
      priceUSD: "2 500 $",
      priceUAH: "250 000.50 UAH",
      groupName: "Длинное предлинное название группы", // Если пусто, отобразится "—"
      arrivalName: "Длинное предлинное название прихода",
      date: "06/12/2017",
    },
    // Можно добавить еще объекты, если нужно больше строк
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => setShowModal(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define the GraphQL query
    const query = `
     query {
      getAllOrders(page: 1) {
        orders {
          order {
            title
            createdAt
            products {
              name
              model
              status
            }
          }
          totalProducts
          totalPrice
        }
      }
    }
    `;

    const fetchOrders = async () => {
      const token = Cookies.get("token");
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        setOrders(data.data.getAllOrders.orders);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen px-2 py-10 lg:px-20 lg:py-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex items-center gap-[10px]">
          <Image
            className="cursor-pointer"
            src={Plus}
            alt="Plus"
            width={50}
            height={50}
          />
          <h1 className="font-semibold text-[24px]">
            Приходы / 25
          </h1>
        </section>
        <section className="relative w-full flex gap-[15px]">
          <div className="overflow-x-auto w-full scroll">
            <table className="flex flex-col gap-[30px]  w-full pb-[20px] " >
              {orders.map((orderData, index) => (
                <tbody className="table-body --border  w-full " key={index}>
                  <tr className={`${isOpen ? "--right" : ""}`}>
                    {!isOpen && (
                      <td className="w-[650px]">
                        <p className="underline decoration-[#afaaaa] underline-offset-[4px] text-[21px]">
                          {orderData.order.title}
                        </p>
                      </td>
                    )}
                    <td>
                      <button
                        className="cursor-pointer border rounded-[50px] p-2 w-auto h-auto"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <Image
                          className=""
                          src={Menu}
                          alt="Menu"
                          width={20}
                          height={20}
                        />

                      </button>
                    </td>
                    <td>
                      <p className="text-[21px] font-bold">
                        {orderData.totalProducts}
                      </p>
                      <p className="text-[#afaaaa]">Продукта</p>
                    </td>

                    <td className='w-[250px] text-center' >
                      <p className="text-[#afaaaa]"> {`${String(new Date(orderData.order.createdAt).getDate()).padStart(2, '0')}/${String(new Date(orderData.order.createdAt).getMonth() + 1).padStart(2, '0')}`}</p>
                      {`${String(new Date(orderData.order.createdAt).getDate()).padStart(2, '0')}/${new Date(orderData.order.createdAt).toLocaleString('ru-RU', { month: 'short' })
                        }/${new Date(orderData.order.createdAt).getFullYear()}`}
                    </td>
                    <td className='w-[250px] text-center'>
                      {orderData.totalPrice} UAH
                    </td>
                    <td className={`${isOpen ? "" : ""}`}>
                      {isOpen && (
                        <button onClick={handleShow} className="cursor-pointer">
                          <Image
                            src={Delete}
                            alt="Delete"
                            width={15}
                            height={15}
                          />
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <ProductTable
            isOpen={isOpen}
            DataArray={DataArray}
            handleShow={handleShow}
            // name={orderData.order.products.name}
            // model={orderData.order.products.model}
            // status={orderData.order.products.status}
          />
        </section>
      </main>
      <Modal show={showModal} onHide={handleClose} />
    </div>
  );
}
