export class Places {
    id!: number;
    start_ts!: Date | null;
    end_ts!: Date | null;
    item_value!: string | null;
    lat_long!: string | null;
    created_at!: Date | null;
    updated_at!: Date | null;
    user_id!: number | null;
    description!: string | null;
    activity_duration_seconds!: number | null;
    activity_duration_hours!: number | null;
    activity_duration_formatted!: string | null;
}

export interface MapProps {
    initialCenter: { lat: number; lng: number };
    zoomLevel: number;
    apiKey: string;
    places: Places[]
}

// I know its the same props :)
export interface MapContainerProps {
    initialCenter: { lat: number; lng: number };
    zoomLevel: number;
    apiKey: string;
    places: Places[];
  }

export interface MarkerProps {
    lat: number;
    lng: number;
}
