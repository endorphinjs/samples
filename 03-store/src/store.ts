import { Store } from 'endorphin';

export type AppState = {
    foo: number;
    bar: string;
    count: number;
};

export default class AppStore extends Store<AppState> {

    constructor(initData = {}) {
        super();

        this.set({
            ...initData
        });
    }

    public dispose() {
        // unsubscribe here
    }
}
