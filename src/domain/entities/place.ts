export type Place = {
  id: string;
  slug: string;
  name: string;
  location: Location;
  description: Description;
  gallery: Gallery[];
};

export type Gallery = {
  url: string;
  height: number;
  width: number;
};
type Location = {
  latitude: number;
  longitude: number;
};
type Description = {
  html: string;
};
