import mixpanel from "mixpanel-browser";
mixpanel.init("f37558fa355369aac4f64c6e0f65967d");

export default defineNuxtPlugin(() => {
    return {
        provide: {
            track: (event: string, properties?: Record<string, any>) => {
                mixpanel.track(event, { properties });
            },
        },
    };
});
