import { redirect } from "next/navigation";

export default async function ProductDetailPage({}) {
  redirect("/home");
  return <></>;
}
