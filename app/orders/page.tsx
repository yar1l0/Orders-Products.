'use client';
import { useState } from 'react';
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Monitor from '@/assets/images/Monitor.png'
import Delete from '@/assets/images/delete.svg'
import Modal from '@/components/Modal'
import Menu from '@/assets/images/burger-menu.png'
export default function Prosucts() {
  const rowDataArray = [
    {
      title: "Длинное предлинное длиннючее название прихода",
      image: Monitor,
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

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleClose = () => setShowModal(false);
  return (
    <div className=" min-h-screen  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex items-center gap-[30px]">
          <h1 className="font-semibold text-[24px]">
            Приходы / 25
          </h1>
        </section>
        <section className="overflow-x-auto w-full scroll">
          <div className="w-[10px]">
            <table className="flex flex-col gap-[30px]  w-full pb-[20px] " >
              {rowDataArray.map((rowData, index) => (
                <tbody className="table-body --border  w-full " key={index}>
                  <tr >



                    <td className='w-[650px]'>
                      {rowData.title ? (
                        <p className="underline decoration-[#afaaaa] underline-offset-[4px] text-[21px] ">
                          {rowData.title}
                        </p>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td>
                      <Image
                        className="cursor-pointer border rounded-[50px] p-2 w-auto h-auto"
                        src={Menu}
                        alt="Menu"
                        width={20}
                        height={20}
                      />
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
        </section>
      </main>
      <Modal show={showModal} onHide={handleClose} />
    </div>
  );
}
