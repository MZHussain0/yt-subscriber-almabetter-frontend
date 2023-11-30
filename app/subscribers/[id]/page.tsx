import CodeBlock from "@/components/CodeBlock";
import { apiClient, isValidObjectId } from "@/lib/utils";

interface PageProps {
  params: {
    id: string;
  };
}

const SingleSubscriberDetails = async ({ params }: PageProps) => {
  let data;

  try {
    if (!isValidObjectId(params.id)) {
      data = "Invalid ID";
      throw new Error("Invalid ID");
    }
    const response = await apiClient.get(`/subscribers/${params.id}`);
    data = response.data;
  } catch (error) {
    console.log(error);
  }
  return (
    <CodeBlock
      data={data}
      text={`Details for single subscriber ID: ${params.id}`}
    />
  );
};

export default SingleSubscriberDetails;
