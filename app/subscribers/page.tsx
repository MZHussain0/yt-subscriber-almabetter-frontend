import CodeBlock from "@/components/CodeBlock";
import { apiClient } from "@/lib/utils";

type Props = {};

const AllSubscribersPage = async (props: Props) => {
  let data;
  try {
    const response = await apiClient.get("/subscribers");
    data = response.data;
  } catch (error) {
    console.log(error);
  }
  return <CodeBlock data={data} text={"Details of all subscribers"} />;
};

export default AllSubscribersPage;
