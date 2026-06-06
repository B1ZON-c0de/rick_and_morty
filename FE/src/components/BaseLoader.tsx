import { Loader } from "@mantine/core";

export const BaseLoader = () => {
  return (
    <div className="flex justify-center mt-6">
      <Loader color="green" />
    </div>
  );
};
