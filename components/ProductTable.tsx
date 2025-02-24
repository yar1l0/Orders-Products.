// ProductTable.tsx
import Image from "next/image";
import Plus from '@/assets/images/plus.png'
import Monitor from '@/assets/images/monitor.png'
import Delete from '@/assets/images/delete.svg'

type DataArrayType = {
  status: string;
};

interface ProductTableProps {
  isOpen: boolean;
  DataArray: DataArrayType[];
  handleShow: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ isOpen, DataArray, handleShow }) => {
  if (!isOpen) return null; // Возвращаем null, если не нужно отображать компонент

  return (
    <div className="flex flex-col gap-[15px] bg-white p-[30px] pb-[0] min-w-[900px] --border">
      <h2 className="text-[21px] font-bold">Длинное предлинное длиннючее название прихода</h2>
      <div className="flex gap-[10px] cursor-pointer">
        <Image src={Plus} alt="Plus" width={24} height={20} />
        <p className="text-[green]">Добавить продукт</p>
      </div>

      <div className="max-h-[600px] overflow-y-auto">
        <table className="table w-full">
          <tbody className="table-body w-full">
            {DataArray.map((rowData, index) => (
              <tr key={index} className="border-top">
                <td>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </td>
                <td>
                  <Image className="dark:invert" src={Monitor} alt="Monitor" width={100} height={100} />
                </td>
                <td>
                  <p className="underline decoration-[#afaaaa] underline-offset-[3px]">
                    Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
                  </p>
                  <p className="text-[#afaaaa]">X58-USB3</p>
                </td>
                <td className="status">{rowData.status}</td>
                <td>
                  <button onClick={handleShow}>
                    <Image className="cursor-pointer" src={Delete} alt="Delete" width={15} height={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
