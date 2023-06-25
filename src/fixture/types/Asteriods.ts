export type AsteriodProps = {
  links: {
    self: String;
  };
  id: number | string;
  neo_reference_id: String;
  name: String;
  name_limited: String;
  designation: String;
  nasa_jpl_url: String;
  absolute_magnitude_h: number;
  estimated_diameter: estimatedDiameterValueProps;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: closeAproachDataProps[];
  orbital_data: typeOrbitalProps;
  is_sentry_object: Boolean;
};
export type estimatedDiameterProps = {
  estimated_diameter_min: String | number | string;
  estimated_diameter_max: String | number | string;
};
export type closeAproachDataProps = {
  close_approach_date: String;
  close_approach_date_full: String;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: String;
    kilometers_per_hour: String;
    miles_per_hour: String;
  };
  miss_distance: {
    astronomical: String;
    lunar: String;
    kilometers: String;
    miles: String;
  };
  orbiting_body: String;
};
export type typeOrbitalProps = {
  orbit_id: String;
  orbit_determination_date: String;
  first_observation_date: String;
  last_observation_date: String;
  data_arc_in_days: number;
  observations_used: number;
  orbit_uncertainty: String;
  minimum_orbit_intersection: String;
  jupiter_tisserand_invariant: String;
  epoch_osculation: String;
  eccentricity: String;
  semi_major_axis: String;
  inclination: String;
  ascending_node_longitude: String;
  orbital_period: String;
  perihelion_distance: String;
  perihelion_argument: String;
  aphelion_distance: String;
  perihelion_time: String;
  mean_anomaly: String;
  mean_motion: String;
  equinox: String;
  orbit_class: {
    orbit_class_type: String;
    orbit_class_description: String;
    orbit_class_range: String;
  };
};
export type estimatedDiameterValueProps = {
  kilometers: estimatedDiameterProps;
  meters: estimatedDiameterProps;
  miles: estimatedDiameterProps;
  feet: estimatedDiameterProps;
};
