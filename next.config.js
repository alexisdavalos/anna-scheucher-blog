module.exports = {
    async redirects() {
        return [
            {
                source: "/about",
                destination: "/posts/about", // Matched parameters can be used in the destination
                permanent: true,
            },
        ];
    },
};
