import { AsteriodProps } from "./Asteriods";

export type mockDataProps = {
  overView?: overViewProps[];
  asteroidList: {
    links: {
      next?: string,
      self?: string
    },
    near_earth_objects: AsteriodProps[]
  }
};
export type overViewProps = {
  img: string | number;
  label: string;
};
