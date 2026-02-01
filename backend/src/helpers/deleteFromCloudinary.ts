import { cloudinary } from "../config/cloudinary.js";

interface CloudinaryResponse {
	result: string;
}

export async function deleteFromCloudinary(publicId: string): Promise<CloudinaryResponse> {
	return new Promise((resolve, reject) => {
		cloudinary.uploader.destroy(publicId, (error, result) => {
			if (error) return reject(error);

			resolve(result);
		});
	});
}
