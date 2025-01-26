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
    <div className="flex gap-xs">
      {storages.map((storage) => (
        <div
          key={storage.capacity}
          className={`flex justify-center align-center border-large ease size-14 cursor-pointer ${
            storagePcked === storage.capacity
              ? ""
              : "border-light-gray hover:border-black"
          }`}
          style={{ height: "60px", width: "90px" }}
          onClick={() => setStoragePicked(storage.capacity)}
        >
          {storage.capacity}
        </div>
      ))}
    </div>
  );
}
