
import blogPostOne from "../images/blog-post-one.jpg"
import blogPostTwo from "../images/blog-post-one.jpg"
import Recipe1 from '../Recipes/Recipe1.jsx'
import Recipe2 from '../Recipes/Recipe2.jsx'
import Recipe3 from '../Recipes/Recipe3.jsx'


const blogPosts = [
    {
        postTitle: "Quick and Easy Strawberry Baked Brie",
        postHeaderImage: blogPostOne,
        postSecondaryImage: blogPostTwo,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "So good and so easy to make! This recipe is perfect for the Holiday season. As your family and friends gather around the table, their eyes and hands will naturally gravitate to the ooey-gooey strawberry-baked brie. This warm dish is by far our family’s favorite appetizer during the colder seasons. It brings us so much happiness that you and your friends/family can share in the joy we have experienced from gathering around this recipe. We love how easy this recipe is to make if you are running out of time at your next family event! As it just takes fifteen to twenty minutes, it’s the perfect go-to for a quick snack before everyone sits down for dinner. We are thrilled to share our secret of how to prepare it!",       
        postRecipeDescription: <Recipe1 />,
    },
    {
        postTitle: "The Best Baked Brie",
        postHeaderImage: blogPostOne,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "The best brie recipe for parties, you know its true",
        postRecipeDescription: <Recipe2 />,
    },
    {
        postTitle: "The Best Baked Brie",
        postHeaderImage: blogPostOne,
        postShortDescription: "The best brie recipe for parties",
        postLongDescription: "The best brie recipe for parties, you know its true",
        postRecipeDescription: <Recipe3 />,
    },
]

export default blogPosts