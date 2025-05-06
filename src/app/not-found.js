import { ErrorPage } from "@/components/pages/404/ErrorPage";
import FOOter from "@/components/utils/FOOter";
import NavBar from "@/components/utils/NavBar";

export default function NotFound() {
  return (
    <>
    <NavBar />
    <ErrorPage />
    <FOOter/>
    </>
  );
}
