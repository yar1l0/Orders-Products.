'use client';
import { useState } from 'react';
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Monitor from '@/assets/images/monitor.png'
import Delete from '@/assets/images/delete.svg'
import Modal from '@/components/Modal'
import Menu from '@/assets/images/burger-menu.png'
import Plus from '@/assets/images/plus.png'
export default function Prosucts() {
  const rowDataArray = [
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
  return (
    <div className=" min-h-screen  sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
              {rowDataArray.map((rowData, index) => (
                <tbody className="table-body --border  w-full " key={index}>
                  <tr >
                    {!isOpen && (
                      <td className="w-[650px]">
                        <p className="underline decoration-[#afaaaa] underline-offset-[4px] text-[21px]">
                          {rowData.title}
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
                      <p className="text-[21px]">
                        {rowData.quantity}
                      </p>
                      <p className="text-[#afaaaa]">Продукта</p>
                    </td>

                    <td className='w-[250px] text-center' >
                      <p className="text-[#afaaaa]">06/12</p>
                      {rowData.date}
                    </td>
                    <td className='w-[250px] text-center'>
                      <p className="text-[#afaaaa]">06/12</p>
                      {rowData.date}
                    </td>
                    <td>
                      <button onClick={handleShow}>
                        <Image
                          className="cursor-pointer"
                          src={Delete}
                          alt="Delete"
                          width={15}
                          height={15}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          {isOpen && (
            <div className='flex flex-col gap-[15px]   bg-white p-[30px]'>
              <h2 className='text-[21px] font-bold	'>Длинное предлинное длиннючее название прихода</h2>
              <div className='flex gap-[10px] cursor-pointer'>
                <Image
                  src={Plus}
                  alt="Plus"
                  width={24}
                  height={20}
                />
                <p className='text-[green]'>Добавить продукт</p>
              </div>
              <table className="table w-full">
                <tbody className="table-body w-full">
                {DataArray.map((rowData, index) => (
                  <tr key={index}>
                    <td>
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </td>
                    <td>
                      <Image
                        className="dark:invert"
                        src={Monitor}
                        alt="Monitor"
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>
                      <p className="underline decoration-[#afaaaa] underline-offset-[3px]">Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3</p>
                      <p className="text-[#afaaaa]">X58-USB3</p>
                    </td>
                    <td className="status">{rowData.status}</td>
                    <td>
                      <button onClick={handleShow}>
                        <Image
                          className="cursor-pointer"
                          src={Delete}
                          alt="Delete"
                          width={15}
                          height={15}
                        />
                      </button>
                    </td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
      <Modal show={showModal} onHide={handleClose} />
    </div>
  );
}
