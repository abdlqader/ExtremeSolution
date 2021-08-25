import express from "express";
import { IncomingHttpHeaders } from "http";
import User from "../models/User.model";

interface Request extends express.Request {
    user?:User
}
 
interface Response extends express.Response {
}
export interface LoginCredentials{
    name:string;
    password:string;
}