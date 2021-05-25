import axios from 'axios';

var ServerURL = "http://127.0.0.1:3000";
axios.defaults.baseURL = ServerURL;
axios.defaults.withCredentials = true;

var ServerBookURL = "/book";
var ServerLibcardURL = "/libcard";
var ServerRecordURL = "/record";
var ServerUserURL = "/user";
var ServerLoginURL = "/login";
var ServerLogoutURL = "/logout";
var ServerCheckAuthURL = "/check";

var Request = {
    ListRequest: "/list",
    SelectRequest: "/select",
    AddRequest: "/add",
    DeleteRequest: "/del",
    UpdateRequest: "/upd"
};

export { axios, ServerBookURL, ServerLibcardURL, ServerRecordURL, ServerUserURL, ServerLoginURL, ServerLogoutURL, ServerCheckAuthURL, Request };