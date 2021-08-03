import admin from "../../../../lib/firebaseNode.js";
import NextCors from "nextjs-cors";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "500kb",
        },
    },
};

export default async function handler(req, res) {
    // Run the cors middleware
    await NextCors(req, res, {
        // Options
        methods: ["GET", "POST"],
        origin: "*",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    // Initialize variables
    const { slug } = req.query;
    const { data } = req.body;

    // Firebase Logic
    if (data) {
        const db = admin.firestore();
        const blogCollection = db.collection("blog");
        let newData = null;

        try {
            await blogCollection.doc(slug).set(data);
            const blogPost = await blogCollection.doc(slug).get();
            newData = blogPost.data();
            console.log("~~ adding 1 view to post:", newData.title);
        } catch (error) {
            res.status("501").send({
                message: error.message ? error.message : error,
            });
        }
        if (newData) {
            res.status("200").send({ data: newData });
        }
    }
}
