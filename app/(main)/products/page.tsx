'use client';
import { useState } from 'react';
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Monitor from '@/assets/images/monitor.png'
import Delete from '@/assets/images/delete.svg'
import Modal from '@/components/Modal'
export default function Prosucts() {
  const rowDataArray = [
    {
      status: "В ремонте",
      image: Monitor,
      brand: "Gigabyte Technology",
      model: "X58-USB3",
      warrantyStart: "06/04/2017",
      warrantyEnd: "06/08/2025",
      condition: "Б/У",
      priceUSD: "2 500 $",
      priceUAH: "250 000.50 UAH",
      groupName: "", // Если пусто, отобразится "—"
      arrivalName: "Длинное предлинное название прихода",
      date: "06/12/2017",
    },
    {
      status: "В ремонте",
      image: Monitor,
      brand: "Gigabyte Technology",
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
            Продукты / 25
          </h1>
          <div className="flex items-center gap-[10px]">
            <p>Тип:</p>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="flex items-center gap-[10px]">
            <p>Спецификация:</p>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </section>
        <section className="overflow-x-auto w-full scroll">
          <div className="w-[10px]">
            <table className="flex flex-col gap-[30px]  w-full pb-[20px] " >
              {rowDataArray.map((rowData, index) => (
                <tbody className="table-body --border  w-full " key={index}>
                  <tr >
                    <td>
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </td>
                    <td>
                      <Image
                        className="dark:invert"
                        src={rowData.image}
                        alt="Monitor"
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>
                      <p className="underline decoration-[#afaaaa] underline-offset-[3px]">
                        {rowData.brand}
                      </p>
                      <p className="text-[#afaaaa]">{rowData.model}</p>
                    </td>
                    <td className="status">{rowData.status}</td>
                    <td className="w-[150px]">
                      <span className="text-[#afaaaa]">с</span> {rowData.warrantyStart} <br />
                      <span className="text-[#afaaaa]">по</span> {rowData.warrantyEnd}
                    </td>
                    <td>{rowData.condition}</td>
                    <td>
                      <p className="text-[#afaaaa]">{rowData.priceUSD}</p>
                      {rowData.priceUAH}
                    </td>
                    <td className='w-[350px]'>
                      {rowData.groupName ? (
                        <p className="underline decoration-[#afaaaa] underline-offset-[4px] text-[21px] ">
                          {rowData.groupName}
                        </p>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="underline decoration-[#afaaaa] underline-offset-[4px] text-[21px] w-[350px]">
                      {rowData.arrivalName}
                    </td>
                    <td className="underline decoration-[#afaaaa] underline-offset-[4px] text-[21px] w-[350px]">
                      {rowData.arrivalName}
                    </td>
                    <td>
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
