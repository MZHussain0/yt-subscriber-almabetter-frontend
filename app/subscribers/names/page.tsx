import CodeBlock from "@/components/CodeBlock";
import { apiClient } from "@/lib/utils";

type Props = {};

const SubscriberNames = async (props: Props) => {
  let data;
  try {
    const response = await apiClient.get("/subscribers/names");
    data = response.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <CodeBlock
      data={data}
      text={"Details of all subscribers with names and subscribed channel"}
    />
  );
};

export default SubscriberNames;
