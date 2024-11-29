import axios from "axios";

export const uploadImage = async (img) => {
    let imgUrl = null;

    try {
        const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/upload-url");
        console.log("Response from server:", response);
        
        const uploadURL = response.data.uploadUrl;
        if (!uploadURL) {
            throw new Error("No uploadUrl returned from server");
        }

        await axios.put(uploadURL, img, {
            headers: {
                'Content-Type': 'image/jpeg'
            }
        });

        imgUrl = uploadURL.split("?")[0];
    } catch (error) {
        console.error("Error uploading image:", error);
    }

    return imgUrl;
};
 