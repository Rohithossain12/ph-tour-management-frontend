import type { ComponentType } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type { ISendOtp, ILogin, IVerifyOtp } from "./auth.type"



export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
}



export interface ISidebarItem {
    title: string,
    items: {
        title: string,
        url: string,
        component: ComponentType
    }[],
}



export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER";