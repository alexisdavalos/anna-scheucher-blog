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

    //Initialize Variables
    const { slug } = req.query;

    // Firebase Logic
    if (slug) {
        const db = admin.firestore();
        const blogCollection = db.collection("blog");
        let data = null;

        try {
            const postDoc = await blogCollection.doc(slug).get();
            data = postDoc.data();
            if (!postDoc.exists) {
                res.status("200").send({
                    data: null,
                    message: "No Post Found",
                });
            }
        } catch (error) {
            res.status("501").send({
                message: error.message ? error.message : error,
            });
        }

        if (data) {
            console.log("~~ found blog post:", data.title);
            res.status("200").send({ data });
        }
    }
}
