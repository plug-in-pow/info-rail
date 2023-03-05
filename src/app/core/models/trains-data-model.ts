export interface TrainsInfo {
    train_id: number;
    train_no: number;
    train_name: string;
    arrival_time: string;
    departure_time: string;
    start_at: string;
    end_at: string;
    start_at_cd: string;
    end_at_cd: string;
    train_type: string;
    duration_h: number;
    duration_m: number;
    coaches: string;
}

export interface TrainsInfoSearchPage {
    train_no: number;
    train_name: string;
    start_at: string;
    end_at: string;
    start_at_cd: string;
    end_at_cd: string;
}

export interface TrainsSearchResult {
    train_no: number;
    train_number: number;
}