"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class GotService {
    // bodyUsed: boolean;
    // body: NodeJS.ReadableStream;
    // json(): Promise<any>;
    // json<T>(): Promise<T>;
    // text(): Promise<string>;
    // buffer(): Promise<Buffer>;
    constructor() {
        this._apiBase = "https://anapioficeandfire.com/api";
    }
    getResource(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this._apiBase}${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
            return yield res.json();
        });
    }
    ;
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
}
const got = new GotService();
got.getAllCharacters()
    // .then(res => console.log(res))
    .then((res) => {
    console.log(res.forEach((element) => {
        console.log(element.name);
    }));
});
got.getCharacter(130)
    .then(res => console.log(res));
