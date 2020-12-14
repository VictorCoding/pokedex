class Storage {
    key = '';

    constructor(key: string) {
        this.key = key;
    }

    // tried to use generics here but it was a mess
    // when actually trying to use it ugh
    get(parse = false): any | null {
        let value = localStorage.getItem(this.key);

        if (parse) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                return null;
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
