const images = import.meta.glob('../assets/annees/**/*.{png,jpg,jpeg}');

export const loadImages = async () => {
    const groupedImages = {};

    for (const path in images) {
        const year = path.split('/')[3];
        const image = await images[path]();

        if (!groupedImages[year]) {
            groupedImages[year] = [];
        }

        groupedImages[year].push(image.default);
    }

    return groupedImages;
};
