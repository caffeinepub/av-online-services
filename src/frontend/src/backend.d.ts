import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    becomeAdmin(): Promise<void>;
    getAdmin(): Promise<Principal | null>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    isAdmin(): Promise<boolean>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
}
