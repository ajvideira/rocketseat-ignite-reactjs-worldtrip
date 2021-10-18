export type Continent = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  countries: number;
  languages: number;
  cities: {
    id: number;
    name: string;
    country: string;
    countryCode: string;
    image: string;
  }[];
};
