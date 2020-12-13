class Storage {
    key = '';

    constructor(key: string) {
        this.key = key;
    }

    get<T>(parse = false): string | T {
        let value = localStorage.getItem(this.key);

        if (parse) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                value = '';
            }
        }

        return value;
    }

    set(value: string, stringify = false) {
        if (stringify) {
            value = JSON.stringify(value);
        }

        localStorage.setItem(this.key, value);
    }
}

export {
    Storage,
};
