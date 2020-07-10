"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.setCookie = setCookie;

exports.readCookie = readCookie;

exports.deleteCookie = deleteCookie;

function setCookie(name, value, date) {
    let expirey = date instanceof Date ? "; expires=" + date : null;

    var cookie = [name, "=", JSON.stringify(value), "; domain_.", window.location.host.toString(), "; path=/;", expirey].join("");

    document.cookie = cookie;
}

function readCookie(name) {
    var result = document.cookie.match(new RegExp(name + "=([^;]+)"));

    result = result != null ? JSON.parse(result[1]) : null;

    return result;
}

function deleteCookie(name) {
    document.cookie = [name, "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain.", window.location.host.toString()].join("");
}
