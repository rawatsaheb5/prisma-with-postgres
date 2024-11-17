import prisma from "../db/config.js";

export const createPost = async (req, res) => {
  try {
    const { title, description, authorId, image } = req.body;
    //console.log(req.body)
    const newPost = await prisma.post.create({
      data: {
        title: title,
        description: description,
        image: image,
        authorId: authorId,
      },
    });

    res.status(201).json({ message: "new post created successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
export const fetchAllPost = async (req, res) => {
  try {
    const allPost = await prisma.post.findMany({});

    res
      .status(200)
      .json({ data: allPost, message: "all post fetched successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
export const fetchSinglePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    //console.log(req)
    const post = await prisma.post.findFirst({
      where: {
        id: Number(postId),
      },
    });

    if (post === null) {
      return res.status(400).json({ message: "post doesn't exists" });
    }
    res
      .status(200)
      .json({ data: post, message: "all post fetched successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};
