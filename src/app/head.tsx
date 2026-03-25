import Script from "next/script";

export const metadata = {
  title: "Solution Doux Confort",
  description: "Solution Doux Confort se spécialise dans la climatisation, le chauffage et les thermopompes, offrant des solutions écoénergétiques et adaptées à vos besoins. Confort, fiabilité et expertise sont au cœur de nos services pour un intérieur agréable en toute saison. 4 saisons une solution, Doux Confort!",
  openGraph: {
    title: 'Solution Doux Confort',
    description: 'Solution Doux Confort se spécialise dans la climatisation, le chauffage et les thermopompes, offrant des solutions écoénergétiques et adaptées à vos besoins. Confort, fiabilité et expertise sont au cœur de nos services pour un intérieur agréable en toute saison. 4 saisons une solution, Doux Confort!',
    images: ['/logo-600x269.jpg'],
  },
};

const title = metadata.title;
const description = metadata.description;

export default function Head() {
  return (
    <head>
      <title>
        {title}
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <meta name="author" content="Kevin Jobin - Développement Web" />
      <link rel="icon" href="/favicon.ico" sizes="any"  />
    
    </head>
  );
}
