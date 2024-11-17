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
