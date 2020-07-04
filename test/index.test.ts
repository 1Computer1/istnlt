import { FunThing } from '../src';

describe("Fun test", () => {
    it("works if true is truthy", () => {
        expect(true).toBeTruthy();
    });

    it("FunThing is instantiable", () => {
        expect(new FunThing()).toBeInstanceOf(FunThing);
    });

    it("FunThing.x is 5", () => {
        expect(new FunThing().x).toBe(5);
    });
});
