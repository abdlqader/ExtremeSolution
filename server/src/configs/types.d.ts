import express from "express";
import { IncomingHttpHeaders } from "http";
import User from "../models/User.model";

interface Request extends express.Request {
    user?:User
}
 
interface Response extends express.Response {
}
export interface LoginCredentials {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  role: string;
  username: string;
}