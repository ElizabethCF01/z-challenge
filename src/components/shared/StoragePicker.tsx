import { Storage } from "../../interfaces/Product";

export default function StoragePicker({
  storages,
  storagePcked,
  setStoragePicked,
}: {
  storages: Storage[];
  storagePcked: string;
  setStoragePicked: (storage: string) => void;
}) {
  return (
    <div className="flex p-1">
      {storages.map((storage) => (
        <div
          key={storage.capacity}
          className={`flex justify-center align-center border-large ease size-14 cursor-pointer hover:z-2 ${
            storagePcked === storage.capacity
              ? "z-2"
              : "border-light-gray hover:border-black"
          }`}
          style={{ height: "60px", width: "90px", marginLeft: "-2px" }}
          onClick={() => setStoragePicked(storage.capacity)}
        >
          {storage.capacity}
        </div>
      ))}
    </div>
  );
}
