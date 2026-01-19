import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erreur 404 - Solution Doux Confort",
  description: "Oups! La page que vous recherchez n'existe pas.",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="Erreur 404" />
      <NotFound />
    </>
  );
};

export default ErrorPage;
