
export default function rng(): Promise<Uint8Array> {
    return new Promise((resolve) => {
        wx.getRandomValues({
            length: 16,
            success: res => {
                resolve(new Uint8Array(res.randomValues));
            },
            fail: () => {
                throw new Error("Failed to get random values");
            }
        })
    });
}
