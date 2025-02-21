'use client';
import Image from "next/image";
import { Form, Button, Modal } from 'react-bootstrap';
import Monitor from '@/assets/images/Monitor.png';
import Delete from '@/assets/images/del.png';

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

const Modals: React.FC<ModalProps> = ({ show, onHide }) => {
  return (
    <div
      className={`modal ${show ? 'show' : ''}`}
      style={{ display: show ? 'block' : 'none', position: 'initial' }}
    >
      <Modal.Dialog size="lg">
        <Modal.Header closeButton onHide={onHide} className="p-[30px]">
          <Modal.Title>Вы уверины, что хотите удалить?</Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-[0] pl-[15px]">
          <table className="table  w-full">
            <tbody className="table-body  w-full ">
              <tr >
                <td>
                  {/* <div className="w-3 h-3 bg-green-500 rounded-full"></div> */}
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </td>
                <td >
                  <Image
                    className="dark:invert"
                    src={Monitor}
                    alt="Monitor"
                    width={100}
                    height={100}
                  />
                </td>
                <td ><p className="underline decoration-[#afaaaa] underline-offset-[3px]">Gigabyte Technology </p><p className="text-[#afaaaa]">X58-USB3</p></td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>

        <Modal.Footer className="bg-[#70a570] gap-[15px]">
          <button className="text-[#fff]" onClick={onHide}>ОТМЕНИТЬ</button>
          <button className="text-[red] flex gap-[5px] items-center bg-[#fff] px-4 py-2  rounded-[30px]">
            <Image
              className="cursor-pointer"
              src={Delete}
              alt="Delete"
              width={15}
              height={15}
            />
            УДАЛИТЬ
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Modals;
