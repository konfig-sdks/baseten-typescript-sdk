import { Baseten } from "./index";

describe("baseten-typescript-sdk", () => {
    it("initialize client", async () => {
        const baseten = new Baseten({
            apiKey: "API_KEY",
        });
    });
});
