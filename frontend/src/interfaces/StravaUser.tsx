export interface StravaUser {
    id: number;
    username: string | null;
    resource_state: number;
    firstname: string;
    lastname: string;
    bio: string | null;
    city: string;
    state: string;
    country: string;
    sex: string;
    premium: boolean;
    summit: boolean;
    created_at: Date;
    updated_at: Date;
    badge_type_id: number;
    profile_medium: string;
    profile: string;
    friend: number | null;
    follower: number | null;
    weight?: number;
    ftp?: number;
}