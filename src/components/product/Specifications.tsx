import { ProductDetails } from "../../interfaces/Product";
import Specification from "./Specification";

export default function Specifications({
  product,
}: {
  product: ProductDetails;
}) {
  const { brand, name, description, specs } = product;
  return (
    <div className="w-full flex flex-col mt-lg text-sm">
      <Specification label="brand" value={brand} />
      <Specification label="name" value={name} />
      <Specification label="description" value={description} />
      <Specification label="screen" value={specs.screen} />
      <Specification label="resolution" value={specs.resolution} />
      <Specification label="processor" value={specs.processor} />
      <Specification label="main camera" value={specs.mainCamera} />
      <Specification label="selfie camera" value={specs.selfieCamera} />
      <Specification label="battery" value={specs.battery} />
      <Specification label="os" value={specs.os} />
      <Specification
        label="screen refresh rate"
        value={product.specs.screenRefreshRate}
        className="border-y-small"
      />
    </div>
  );
}
