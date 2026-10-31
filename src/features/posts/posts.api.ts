import api from "@/lib/api";
import type { Post } from "./posts.types";
export const getPosts = async () => {
    const res = await api.get<Post[]>("/posts");
    if (!Array.isArray(res.data)) {
        throw new Error("The posts API returned an invalid response.");
    }
    return res.data;
};
export const getPost = async (id: Post["id"]) => {
    return (await api.get<Post>(`/posts/${id}`)).data;
};