class GotService {
    private _apiBase: string;
    // bodyUsed: boolean;
    // body: NodeJS.ReadableStream;
    // json(): Promise<any>;
    // json<T>(): Promise<T>;
    // text(): Promise<string>;
    // buffer(): Promise<Buffer>;

    constructor() {
        this._apiBase = "https://anapioficeandfire.com/api"
    }

    async getResource<T>(url: string): Promise<T> {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10')
    }
    getCharacter(id: number): Promise<unknown> {
        return this.getResource(`/characters/${id}`)
    }
}

const got = new GotService();
got.getAllCharacters()
    // .then(res => console.log(res))
    .then((res: any) => {
        console.log(res.forEach((element: any) => {
            console.log(element.name)
        }))
    }
    )

got.getCharacter(130)
    .then(res => console.log(res))
